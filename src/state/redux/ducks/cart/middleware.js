// Middleware
import apolloClient from "../../../graphql/apollo-client";
import { loader } from "graphql.macro";
import types from "./types";
import actions from "./actions";
import getCartId from "./middleware/getCartId";
import addToCart from "./middleware/addToCart";

const handleFetchCart = async (store, action) => {
  action.cartId = await getCartId(store);
  const result = await apolloClient.query({
    query: loader("../../../graphql/queries/fetchCart.graphql"),
    variables: action
  });

  if (result.errors) {
    store.dispatch({ type: "SET_MESSAGES", messages: result.errors }); // @todo: Implement this
  }

  //store.dispatch(actions.updateCart(result.data));
};

const cartMiddleware = store => {
  return next => {
    return async action => {
      next(action);

      let requestType;
      let graphqlRequest;
      let variables;

      switch (action.type) {
        case types.FETCH_CART:
          return handleFetchCart(store, action);

        case types.ADD_PRODUCT:
          return addToCart(store, action);

        case types.UPDATE_PRODUCT:
          requestType = "mutation";
          graphqlRequest = loader(
            "../../../graphql/mutations/updateProductInCart.graphql"
          );
          variables = action;
          break;

        case types.REMOVE_PRODUCT:
          requestType = "mutation";
          graphqlRequest = loader(
            "../../../graphql/mutations/removeProductFromCart.graphql"
          );
          variables = action;
          break;

        default:
          return;
      }

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
    };
  };
};

export default cartMiddleware;
