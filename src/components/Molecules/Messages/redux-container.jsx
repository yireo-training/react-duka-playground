import React from "react";
import { connect } from "react-redux";
import actions from "state/redux/ducks/messages/actions";
import Messages from "./component";

const MessagesReduxContainer = props => {
  return <Messages {...props}/>
};

const mapStateToProps = state => {
  return {
    messages: state.messages.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onMessageClose: messageText => {
      dispatch(actions.removeMessage(messageText));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessagesReduxContainer);
