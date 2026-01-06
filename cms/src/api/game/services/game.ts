/**
 * game service
 */

import { factories } from '@strapi/strapi'
import axios from 'axios'
import { JSDOM } from 'jsdom'
import slugify from 'slugify'
import qs from 'node:querystring'

const gameService = 'api::game.game'
const publisherService = 'api::publisher.publisher'
const developerService = 'api::developer.developer'
const categoryService = 'api::category.category'
const platformService = 'api::platform.platform'

async function getGameInfo(slug) {
  try {
    const body = await axios.get(`https://www.gog.com/game/${slug}`)
    const dom = new JSDOM(body.data)

    //   SCRAPPER
    const raw_description = dom.window.document.querySelector('.description')

    const description = raw_description?.innerHTML || ''
    const short_description = raw_description?.textContent?.slice(0, 160) || ''

    const ratingElement = dom.window.document.querySelector(
      '.age-restrictions__icon use'
    )

    return {
      description,
      short_description,
      rating: ratingElement
        ? ratingElement
            .getAttribute('xlink:href')
            .replace(/_/g, '')
            .replace('#', '')
        : 'BR0',
    }
  } catch (error) {
    console.warn(`⚠️ Não foi possível obter info do jogo: ${slug}`)
    return {
      description: '',
      short_description: '',
      rating: 'BR0',
    }
  }
}

async function getByName(name, entityService) {
  try {
    if (entityService === gameService) {
      const item = await strapi.service(entityService).find({
        filters: { title: name },
      })

      return item.results.length > 0 ? item.results[0] : null
    }

    const item = await strapi.service(entityService).find({
      filters: { name },
    })

    return item.results.length > 0 ? item.results[0] : null
  } catch (error) {
    console.error(
      `❌ Erro ao buscar ${name} em ${entityService}:`,
      error.message
    )
    return null
  }
}

async function create(name, entityService) {
  try {
    const item = await getByName(name, entityService)

    if (!item) {
      await strapi.service(entityService).create({
        data: {
          name,
          slug: slugify(name, { strict: true, lower: true }),
        },
      })
    }
  } catch (error) {
    console.error(
      `❌ Erro ao criar ${name} em ${entityService}:`,
      error.message
    )
  }
}

async function createManyToManyData(products) {
  try {
    // Cria arrays vazios que só aceitam valores únicos
    const developersSet = new Set()
    const publishersSet = new Set()
    const categoriesSet = new Set()
    const platformsSet = new Set()

    //   Itera sobre cada produto e extrai o array de dev, pub, genres e operatingSystems
    products.forEach((product) => {
      const { developers, publishers, genres, operatingSystems } = product

      // Popula os array's que foram criados em branco
      genres?.forEach(({ name }) => {
        categoriesSet.add(name)
      })

      operatingSystems?.forEach((item) => {
        platformsSet.add(item)
      })

      developers?.forEach((item) => {
        developersSet.add(item)
      })

      publishers?.forEach((item) => {
        publishersSet.add(item)
      })
    })

    //   Cria uma função que cria os itens na base de dados
    const createCall = (set, entityName) =>
      Array.from(set).map((name) => create(name, entityName))

    // Popula os arrays no banco, usando Promise.all para aguardar que todas as promises sejam resolvidas
    await Promise.all([
      ...createCall(developersSet, developerService),
      ...createCall(publishersSet, publisherService),
      ...createCall(categoriesSet, categoryService),
      ...createCall(platformsSet, platformService),
    ])
  } catch (error) {
    console.error('❌ Erro ao criar dados ManyToMany:', error.message)
  }
}

async function createGames(products) {
  await Promise.all(
    products.map(async (product) => {
      try {
        const item = await getByName(product.title, gameService)

        if (!item) {
          console.info(`Creating: ${product.title}...`)

          const { description, short_description, rating } = await getGameInfo(
            product.slug
          )

          const game = await strapi.service(`${gameService}`).create({
            data: {
              title: product.title,
              slug: product.slug,
              price: product.price.finalMoney.amount,
              release_date: new Date(product.releaseDate),
              description,
              short_description,
              rating,
              categories: await Promise.all(
                product.genres.map(({ name }) =>
                  getByName(name, categoryService)
                )
              ),
              platforms: await Promise.all(
                product.operatingSystems.map((name) =>
                  getByName(name, platformService)
                )
              ),
              developers: await Promise.all(
                product.developers.map((name) =>
                  getByName(name, developerService)
                )
              ),
              publisher: await Promise.all(
                product.publishers.map((name) =>
                  getByName(name, publisherService)
                )
              ),
              publishedAt: new Date(),
            },
          })

          return game
        }
      } catch (error) {
        console.error(`❌ Erro ao criar jogo ${product.title}:`, error.message)
      }
    })
  )
}

export default factories.createCoreService('api::game.game', () => ({
  async populate(params) {
    try {
      const gogApiUrl = `https://catalog.gog.com/v1/catalog?${qs.stringify(
        params
      )}`
      const {
        data: { products },
      } = await axios.get(gogApiUrl)

      console.info(`📦 Encontrados ${products.length} produtos`)

      await createManyToManyData(products)
      await createGames(products)

      console.info('✅ Populate finalizado com sucesso!')
    } catch (error) {
      console.error('❌ Erro no populate:', error.message)
      throw error
    }
  },
}))
