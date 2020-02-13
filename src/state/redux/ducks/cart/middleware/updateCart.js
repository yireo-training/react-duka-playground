import { loader } from "graphql.macro";
import apolloClient from "../../../../graphql/apollo-client";
import messagesActions from "../../messages/actions";
import commonActions from "../../common/actions";
import getCartId from "./getCartId";
import cartActions from "../actions";

const updateCart = async (store, action) => {
  action.cartId = await getCartId(store);

  try {
    const queryResult = await apolloClient.query({
      query: loader("../../../../graphql/queries/cart.graphql"),
      variables: action
    });

    console.log('Cart data', queryResult.data.cart.items);
    store.dispatch(
      cartActions.setProducts(action.cartId, queryResult.data.cart.items)
    );

    //store.dispatch(messagesActions.addMessage('Cart has been synced', "info"));
    store.dispatch(commonActions.unlock());
  } catch (error) {
    console.log(error);
    store.dispatch(messagesActions.addMessage(error.toString(), "danger"));
    store.dispatch(commonActions.unlock());
    return;
  }
};

export default updateCart;
