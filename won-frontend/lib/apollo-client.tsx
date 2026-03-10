"use client";

import type { ReactNode } from "react";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";

const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:1337/graphql" }),
  cache: new InMemoryCache(),
});

export function ApolloProviderWrapper({ children }: { children: ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
