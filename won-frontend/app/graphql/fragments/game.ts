import { gql } from "@apollo/client";

export const GameFragment = gql`
 fragment GameFragment on Game {
  title
    cover {
      url
    }
    developers {
      name
    }
    slug
    price
    release_date
 }
`
