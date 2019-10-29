import commonActions from "../../common/actions";
import messagesActions from "../../messages/actions";
import customerActions from "../../customer/actions";

export default store => {
  store.dispatch(messagesActions.cleanMessages());
  store.dispatch(messagesActions.addMessage("You have logged out", "info"));
  store.dispatch(customerActions.postLogoutCustomer());
  store.dispatch(commonActions.unlock());
};
