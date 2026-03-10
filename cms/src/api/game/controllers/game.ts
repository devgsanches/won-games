/**
 * game controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController(
  'api::game.game',
  ({ strapi }) => ({
    async populate(ctx) {
      console.log('RODANDO NO SERVIDOR')
      const options = {
        limit: 45,
        order: 'desc:trending',
        ...ctx.query,
      }

      await strapi.service('api::game.game').populate(options)

      ctx.send('Finished populating games!')
    },
  })
)
