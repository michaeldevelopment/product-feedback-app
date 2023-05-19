import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { client } from "./client";

export default function Provider({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
