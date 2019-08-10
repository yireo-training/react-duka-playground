import apolloClient from "../../../../graphql/apollo-client";
import { loader } from "graphql.macro";
import cartActions from "../actions";

const getCartId = async store => {
  const currentState = store.getState();
  if (currentState.cart && currentState.cart.id) return currentState.cart.id;

  const { data } = await apolloClient.mutate({
    mutation: loader("../../../../graphql/mutations/createEmptyCart.graphql")
  });

  if (!data.createEmptyCart) {
    throw new Error("Empty cart ID");
  }

  store.dispatch(cartActions.setCartId(data.createEmptyCart));
  return data.createEmptyCart;
};

export default getCartId;
