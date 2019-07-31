import apolloClient from "../../../../graphql/apollo-client";
import { loader } from "graphql.macro";
import actions from "../actions";

const getCartId = async store => {
  if (store.id) return store.id;

  const { data } = await apolloClient.mutate({
    mutation: loader("../../../../graphql/mutations/createEmptyCart.graphql")
  });

  if (!data.createEmptyCart) {
    throw new Error("Empty cart ID");
  }

  store.dispatch(actions.setCartId(data.createEmptyCart));
  return data.createEmptyCart;
};

export default getCartId;
