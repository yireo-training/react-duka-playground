import { loader } from "graphql.macro";
import apolloClient from "../../../../graphql/apollo-client";
import messagesActions from "../../messages/actions";
import commonActions from "../../common/actions";
import getCartId from "./getCartId";

const addToCart = async (store, action) => {
  if (!action.sku) {
    throw new Error("addToCart action called with no valid SKU");
  }

  action.cartId = await getCartId(store);

  try {
    await apolloClient.mutate({
      mutation: loader(
        "../../../../graphql/mutations/addSimpleProductToCart.graphql"
      ),
      variables: action
    });
  
    let messageText = 'Product "' + action.sku + '" added to cart';
    store.dispatch(messagesActions.addMessage(messageText, "info"));
    store.dispatch(commonActions.unlock());

  } catch (error) {
    console.log(error);
    store.dispatch(messagesActions.addMessage(error.toString(), "danger"));
    store.dispatch(commonActions.unlock());
    return;
  }
};

export default addToCart;
