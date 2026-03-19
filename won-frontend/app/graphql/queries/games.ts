import { gql } from "@apollo/client"
import { GameFragment } from "../fragments/game"

export const GET_GAMES = gql`
  query GetGames($limit: Int!, $start: Int!) {
    games(
      pagination: { limit: $limit, start: $start }
      sort: ["updatedAt:desc"]
    ) {
      ...GameFragment
    }
  }

  ${GameFragment}
`
