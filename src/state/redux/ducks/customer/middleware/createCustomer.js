import { loader } from "graphql.macro";
import apolloClient from "state/graphql/apollo-client";
import commonActions from "../../common/actions";
import messagesActions from "../../messages/actions";
import { customerActions } from "..";
import { createBrowserHistory } from 'history';

export default async (store, action) => {
  const dispatch = store.dispatch;

  const token = store.getState().customer.token;
  if (token) {
    dispatch(messagesActions.addMessage("Already logged in", "danger"));
    const history = createBrowserHistory();
    history.push("/customer/account"); // @todo: This does not work as expected yet
    return;
  }

  if (!action.email || !action.firstname || !action.lastname || !action.password) {
    dispatch(messagesActions.addMessage("Invalid email or name or password", "danger"));
    dispatch(commonActions.unlock());
    return;
  }

  if (action.password !== action.password2) {
    dispatch(messagesActions.addMessage("Passwords do not match", "danger"));
    dispatch(commonActions.unlock());
    return;
  }

  try {
    await apolloClient.mutate({
      mutation: loader("../../../../graphql/mutations/createCustomer.graphql"),
      variables: action
    });

    // @todo: Check whether the account should be activated first?
    dispatch(customerActions.loginCustomer(action.email, action.password));
    dispatch(messagesActions.cleanMessages());
    dispatch(messagesActions.addMessage("Your account has been created. You are ready to login now"));
    dispatch(commonActions.unlock());

    const history = createBrowserHistory();
    history.push("/customer/account");

  } catch (error) {
    console.log(error);
    dispatch(messagesActions.addMessage(error.toString(), "danger"));
    dispatch(commonActions.unlock());
    return;
  }
};
