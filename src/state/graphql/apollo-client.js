import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
//import store from "../redux/store";

// @todo: Currently this doesn't work, because localStorage hydration takes place after this ApolloClient initialization
//const token = store.getState().customer.token;
const headers = {
  //authorization: token ? `Bearer ${token}` : ""
};

const httpLink = new HttpLink({
  uri: "http://m2.vega.yr/graphql",
  headers: headers
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

export default apolloClient;
