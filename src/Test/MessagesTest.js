import React from "react";
import { connect } from "react-redux";
import actions from "../state/redux/ducks/messages/actions";

const MessagesTest = props => {
  const onClick = () => {
    const messageText = 'Hello world';
    const messageType = 'info';
    props.dispatchAction(messageText, messageType);
  };

  return <button onClick={onClick}>Add sample message</button>;
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchAction: (messageText, messageType) => {
      dispatch(actions.addMessage(messageText, messageType));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(MessagesTest);
