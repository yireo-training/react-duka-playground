import { ApolloClient } from "apollo-boost";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import config from "config.js";
//import store from "../redux/store";

// @todo: Currently this doesn't work, because localStorage hydration takes place after this ApolloClient initialization
//const token = store.getState().customer.token;
const headers = {
  //authorization: token ? `Bearer ${token}` : ""
};

const httpLink = new HttpLink({
  uri: config.magento_graphql_url,
  headers: headers
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

export default apolloClient;
