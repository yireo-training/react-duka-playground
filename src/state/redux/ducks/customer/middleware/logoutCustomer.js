import commonActions from "../../common/actions";
import messagesActions from "../../messages/actions";

export default (store) => {
    store.dispatch(messagesActions.addMessage("You have logged out", "info"));
    store.dispatch(commonActions.unlock());
};
