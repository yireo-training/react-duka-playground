import { loader } from "graphql.macro";
import apolloClient from "../../../../graphql/apollo-client";
import messagesActions from "../../messages/actions";
import commonActions from "../../common/actions";
import cartActions from "../../cart/actions";
import getCartId from "./getCartId";

const removeCartItem = async (store, action) => {
  if (!action.id) {
    throw new Error("removeCartItem action called with no valid ID: " + action.id);
  }

  action.cartId = await getCartId(store);

  try {
    await apolloClient.mutate({
      mutation: loader(
        "../../../../graphql/mutations/removeCartItem.graphql"
      ),
      variables: action
    });

    store.dispatch(cartActions.updateCart());
    store.dispatch(messagesActions.addMessage('Cart item "' + action.name + '" removed', "info"));
    store.dispatch(commonActions.unlock());

  } catch (error) {
    console.log(error);
    store.dispatch(cartActions.updateCart());
    store.dispatch(messagesActions.addMessage(error.toString(), "danger"));
    store.dispatch(commonActions.unlock());
    return;
  }
};

export default removeCartItem;
