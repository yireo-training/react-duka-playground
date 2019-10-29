import React from "react";
import Alert from "react-bootstrap/Alert";

const Item = props => {
  if (props.autoClose) {
    setTimeout(() => {
      props.onClose();
    }, 10000);
  }

  let message = props.text.replace("Error: GraphQL error: ", "");

  return (
    <Alert
      variant={props.type}
      closeLabel="Remove message"
      dismissible
      onClose={props.onClose}
    >
      {message}
    </Alert>
  );
};

export default Item;
