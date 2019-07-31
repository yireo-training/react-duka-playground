import { loader } from "graphql.macro";
import apolloClient from "../../../../graphql/apollo-client";
import actions from "../actions";
import getCartId from "./getCartId";

const addToCart = async (store, action) => {
  action.cartId = await getCartId(store);

  const result = await apolloClient.mutate({
    mutation: loader("../../../../graphql/mutations/addSimpleProductToCart.graphql"),
    variables: action
  });

  if (result.errors) {
    store.dispatch({ type: "SET_MESSAGES", messages: result.errors }); // @todo: Implement this
  }

  store.dispatch(actions.updateCart(result.data));
};

export default addToCart;
