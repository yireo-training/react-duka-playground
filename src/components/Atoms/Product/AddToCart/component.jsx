import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const AddToCart = props => {
  const product = props.product;
  const [inProgress, setInProgress] = useState(false);

  const onClick = () => {
    setInProgress(true);
    props.onClick(product.sku, 1, () => setInProgress(false));
  };

  let label = inProgress ? "Adding to cart ..." : "Add to cart";
  let disabled = inProgress ? true : false;

  return (
    <>
      <Button variant="primary" onClick={onClick} disabled={disabled}>
        {label}
      </Button>
    </>
  );
};

export default AddToCart;
