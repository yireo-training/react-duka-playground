import React from "react";
import { connect } from "react-redux";
import Message from "./Messages/Message";
import actions from "../state/redux/ducks/messages/actions";

const Messages = props => {
  if (!props.messages || !props.messages.length) {
    return <></>
  }

  return (
    <>
      {props.messages.map((message, index) => (
        <Message
          key={index}
          text={message.text}
          type={message.type}
          onClose={() => props.onMessageClose(message.text)}
          autoClose
        />
      ))}
    </>
  );
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
)(Messages);
