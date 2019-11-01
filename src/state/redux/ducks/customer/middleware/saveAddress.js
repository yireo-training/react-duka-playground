import { loader } from "graphql.macro";
import apolloClient from "state/graphql/apollo-client";
import commonActions from "../../common/actions";
import messagesActions from "../../messages/actions";

export default async (store, action) => {
  const dispatch = store.dispatch;

  if (!action.id) {
    dispatch(messagesActions.addMessage("Invalid address ID", "danger"));
    dispatch(commonActions.unlock());
    return;
  }

  try {
    const token = store.getState().customer.token;
    const customerContext = {
      headers: {
        authorization: token ? `Bearer ${token}` : ""
      }
    };

    // @todo: Check for the address ID and determine whether to do a save or an update
    const { data } = await apolloClient.mutate({
      mutation: loader(
        "../../../../graphql/mutations/updateCustomerAddress.graphql"
      ),
      variables: action,
      context: customerContext
    });

    console.log(data);

    dispatch(messagesActions.cleanMessages());
    dispatch(messagesActions.addMessage("Your address have been saved"));
    dispatch(commonActions.unlock());
  } catch (error) {
    console.log(error);
    dispatch(messagesActions.addMessage(error.toString(), "danger"));
    dispatch(commonActions.unlock());
    return;
  }
};
