import { gql } from '@apollo/client'

// Tipagem + Query

export interface GetGameBySlug {
  cover: {
    url: string
  }
  title: string
  slug: string
  price: number
  short_description: string
  description: string
  rating: string
  release_date: string
  developers: {
    name: string
    slug: string
  }[]
  categories: {
    name: string
  }[]
  platforms: {
    name: string
  }[]
  gallery?: {
    url: string
    alternativeText?: string
  }[]
}

export type GetGameBySlugResponse = { games: GetGameBySlug[] }

export const GET_GAME_BY_SLUG = gql`
    query GetGameBySlug($slug: String!) {
      games(filters: { slug: { eq: $slug } }) {
        title
        slug
        price
        short_description
        description
        rating
        release_date
        cover {
          url
        }
        developers {
          name
          slug
        }
        categories {
          name
        }
        platforms {
          name
        }
        gallery {
          url
          alternativeText
        }
      }
    }
  `
