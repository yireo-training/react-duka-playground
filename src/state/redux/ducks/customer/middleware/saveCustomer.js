import { loader } from "graphql.macro";
import apolloClient from "state/graphql/apollo-client";
import commonActions from "../../common/actions";
import messagesActions from "../../messages/actions";
import { customerActions } from "..";

export default async (store, action) => {
  const dispatch = store.dispatch;

  if (!action.email || !action.firstname || !action.lastname) {
    dispatch(messagesActions.addMessage("Invalid email or name", "danger"));
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

    const { data } = await apolloClient.mutate({
      mutation: loader("../../../../graphql/mutations/saveCustomer.graphql"),
      variables: action,
      context: customerContext
    });

    dispatch(customerActions.setCustomerData(data.updateCustomer.customer));
    dispatch(messagesActions.cleanMessages());
    dispatch(messagesActions.addMessage("Your new details have been saved"));
    dispatch(commonActions.unlock());
  } catch (error) {
    console.log(error);
    dispatch(messagesActions.addMessage(error.toString(), "danger"));
    dispatch(commonActions.unlock());
    return;
  }
};
