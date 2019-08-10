import { loader } from "graphql.macro";
import apolloClient from "../../../../graphql/apollo-client";
import customerActions from "../actions";
import messagesActions from "../../messages/actions";
import commonActions from "../../common/actions";

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
    store.dispatch(commonActions.unlock());

  } catch (error) {
    console.log(error);
    store.dispatch(messagesActions.addMessage(error.toString(), "danger"));
    store.dispatch(commonActions.unlock());
    return;
  }
};
