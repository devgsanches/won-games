import { gql } from "@apollo/client"

export const GET_GAME_BY_SLUG = gql`
  query GetGameBySlug($slug: String!) {
    games(filters: { slug: { eq: $slug } }) {
      title
      short_description
      description
      cover {
        url
      }
      developers {
        name
      }
      release_date
      platforms {
        name
      }
      categories {
        name
      }
      price
      gallery {
        url
      }
      rating
    }
  }
`
