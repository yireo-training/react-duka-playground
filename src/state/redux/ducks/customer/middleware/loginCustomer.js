import { loader } from "graphql.macro";
import apolloClient from "../../../../graphql/apollo-client";
import messagesActions from "../../messages/actions";
import customerActions from "../actions";

export default async (store, action) => {
  if (!action.email || !action.password) {
    throw new Error("loginCustomer action called without valid email or password");
  }

  try {
    const { data } = await apolloClient.mutate({
      mutation: loader(
        "../../../../graphql/mutations/generateCustomerToken.graphql"
      ),
      variables: action
    });

    if (!data.generateCustomerToken || !data.generateCustomerToken.token) {
      throw new Error("Empty customer token");
    }
  
    store.dispatch(customerActions.setCustomerToken(data.generateCustomerToken.token));
    store.dispatch(messagesActions.addMessage('You have logged in', "info"));
    store.dispatch(customerActions.unlock());

  } catch (error) {
    console.log(error);
    store.dispatch(messagesActions.addMessage(error.toString(), "danger"));
    store.dispatch(customerActions.unlock());
    return;
  }
};
