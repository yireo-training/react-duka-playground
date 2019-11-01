import { loader } from "graphql.macro";
import apolloClient from "state/graphql/apollo-client";
import messagesActions from "../../messages/actions";
import { customerActions } from "..";

export default async (store, action) => {
  const dispatch = store.dispatch;
  try {
    const token = store.getState().customer.token;
    const customerContext = {
      headers: {
        authorization: token ? `Bearer ${token}` : ""
      }
    };

    const { data } = await apolloClient.query({
      query: loader("../../../../graphql/queries/customer.graphql"),
      context: customerContext
    });

    dispatch(customerActions.setCustomerData(data.customer));
  } catch (error) {
    console.log(error);
    dispatch(messagesActions.addMessage(error.toString(), "danger"));
  }
};
