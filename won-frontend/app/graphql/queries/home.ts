import { gql } from "@apollo/client";
import { GameFragment } from "../fragments/game";
import { BannerFragment } from "../fragments/banner";
import { HighlightFragment } from "../fragments/highlight";

export const GET_HOME = gql`
  query GetHome($date: Date!) {
    banners {
     ...BannerFragment
    }

    newReleases: games(
    filters: {
      release_date: { lt: $date }
    }
    sort: "release_date:desc"
  ) {
    ...GameFragment
    }
    upcoming: games(
    filters: {
      release_date: { gt: $date }
    }
    sort: "release_date:asc"
  ) {
    ...GameFragment
  }
  free: games(
    filters: {
     release_date: { lt: $date }
      price: { eq: 0 }
    }
    sort: "release_date:desc"
  ) {
    ...GameFragment
  }
  sections: home {
    newGames {
      title
      highlight {
        ...HighlightFragment
      }
    }
    popularGames {
      title
      highlight {
        ...HighlightFragment
      }
      games {
        ...GameFragment
      }
    }

    upcomingGames {
      title
      highlight {
        ...HighlightFragment
      }
    }

    freeGames {
      title
      highlight {
        ...HighlightFragment
      }
    }
  }
}
  ${BannerFragment}
  ${GameFragment}
  ${HighlightFragment}
`

