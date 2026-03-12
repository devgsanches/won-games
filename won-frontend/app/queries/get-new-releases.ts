import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

//  Tipagem + Query

export interface GamesNewReleases {
  cover: {
    url: string
  }
  title: string
  slug: string
  price: number
  developers: {
    name: string
  }[]
  short_description: string
}

export type GamesNewReleasesResponse = { games: GamesNewReleases[] }

export const GET_NEW_RELEASES = gql`
   query GetNewReleases {
    games(
      pagination: { limit: 10 }
      sort: ["updatedAt:desc"]
    ) {
      title
      slug
      cover {
        url
      }
      developers {
        name
        slug
      }
      price
      short_description
    }
}
  `
