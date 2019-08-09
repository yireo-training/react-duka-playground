import { loader } from "graphql.macro";
import apolloClient from "../../../../graphql/apollo-client";
import messagesActions from "../../messages/actions";
import cartActions from "../actions";
import getCartId from "./getCartId";

const removeProduct = async (store, action) => {
  if (!action.sku) {
    throw new Error("removeProduct action called with no valid SKU");
  }

  action.cartId = await getCartId(store);

  try {
    await apolloClient.mutate({
      mutation: loader(
        "../../../../graphql/mutations/removeProductFromCart.graphql"
      ),
      variables: action
    });
  
    let messageText = 'Cart item "' + action.sku + '" removed';
    store.dispatch(messagesActions.addMessage(messageText, "info"));
    store.dispatch(cartActions.unlock());

  } catch (error) {
    console.log(error);
    store.dispatch(messagesActions.addMessage(error.toString(), "danger"));
    store.dispatch(cartActions.unlock());
    return;
  }
};

export default removeProduct;
