import { ApolloClient } from "apollo-boost";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import config from "config.js";
import { IntrospectionFragmentMatcher } from "apollo-cache-inmemory";
import introspectionQueryResultData from "../../../src/codegen/graphql.schema.json";

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
});

const httpLink = new HttpLink({
  uri: config.magento_url + "graphql",
  headers: {},
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache({ fragmentMatcher }),
});

export default apolloClient;
