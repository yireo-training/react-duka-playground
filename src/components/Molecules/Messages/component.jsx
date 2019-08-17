import React from "react";
import Message from "./Message";

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

export default Messages;