import React from "react";
import Alert from "react-bootstrap/Alert";

const Message = props => {
  if (props.autoClose) {
    setTimeout(() => {
      props.onClose();
    }, 4000);
  }

  return (
    <Alert
      variant={props.type}
      closeLabel="Remove message"
      dismissible
      onClose={props.onClose}
    >
      {props.text}
    </Alert>
  );
};

export default Message;
