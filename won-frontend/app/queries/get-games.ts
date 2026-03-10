import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import type { GameCardResponse } from "../(app)/_templates/Home"

type GetGamesResponse = { games: GameCardResponse[] }

export function GET_GAMES() {

  const GET_GAMES = gql`
   query GetGames {
    games {
      title
      slug
      cover {
        url
      }
      developers {
        name
        slug
      }
    }
  }
  `

  const { loading, error, data } = useQuery<GetGamesResponse>(GET_GAMES)

  return { loading, error, games: data?.games ?? [] }
}
