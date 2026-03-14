import { gql } from "@apollo/client"

export const GET_GAMES = gql`
  query GetGames($limit: Int!, $start: Int!) {
    games(
      pagination: { limit: $limit, start: $start }
      sort: ["updatedAt:desc"]
    ) {
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
