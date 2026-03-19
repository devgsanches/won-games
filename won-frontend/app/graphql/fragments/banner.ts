import { gql } from "@apollo/client";

export const BannerFragment = gql`
  fragment BannerFragment on Banner {
     slug
     title
     image {
      url
     }
     ribbon {
      ribbonText
      color
      size
     }
 }

`
