// Middleware
import apolloClient from "../../../graphql/apollo-client";
import { loader } from "graphql.macro";
import types from "./types";
import actions from "./actions";

const cartMiddleware = store => {
    return next => {
      return async action => {
        next(action);
  
        let requestType;
        let graphqlRequest;
        let variables;
  
        switch (action.type) {
          case types.FETCH_CART:
            requestType = "query";
            graphqlRequest = loader("../../../graphql/queries/fetchCart.graphql");
            variables = action;
            break;
  
          case types.ADD_PRODUCT:
            requestType = "mutation";
            graphqlRequest = loader("../../../graphql/mutations/addProductToCart.graphql");
            variables = action;
            break;
  
          case types.UPDATE_PRODUCT:
            requestType = "mutation";
            graphqlRequest = loader("../../../graphql/mutations/updateProductInCart.graphql");
            variables = action;
            break;
  
          case types.REMOVE_PRODUCT:
            requestType = "mutation";
            graphqlRequest = loader("../../../graphql/mutations/removeProductFromCart.graphql");
            variables = action;
            break;
  
          default:
            return;
        }
  
        try {
          if (requestType === "mutation") {
            await apolloClient.mutate({
              mutation: graphqlRequest,
              variables: variables
            });
  
            store.dispatch(actions.fetchCart()); // @todo: Is this needed or does a mutation provide all details?
          } else {
            const { data } = await apolloClient.query({
              query: graphqlRequest,
              variables: variables
            });
  
            store.dispatch(actions.updateCart(data));
          }
        } catch (e) {
          console.log(e); // @todo: Should we do something different here?
        }
      };
    };
  };
  
  export default cartMiddleware;