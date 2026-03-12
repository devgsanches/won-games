import { gql } from "@apollo/client";

// Tipagem + Query

interface GamesBannerCard {
  cover: {
    url: string
    __typename: string
  }
  title: string
  slug: string
  __typename: string
  developers: {
    name: string
    slug: string
  }[]
}

export type GetGamesBannerResponse = { games: GamesBannerCard[] }

export const GET_GAMES_BANNER = gql`
   query GetGamesBanner {
    games(pagination:  {
     limit: 3
     start: 1
    }) {
      title
      slug
      cover {
        url
      }
      developers {
        name
      }
    }
  }
  `

export const GET_GAMES = gql`
   query GetGames {
    games(pagination:  {
       limit: 6,
    }) {
      title
      slug
      cover {
        url
      }
      developers {
        name
      }
      price
    }
  }
  `
