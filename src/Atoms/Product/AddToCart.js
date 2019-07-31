import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux"
import actions from "../../state/redux/ducks/cart/actions";

const AddToCart = props => {
  const product = props.product;
  const [disabled, setDisabled] = useState(false);
  const [label, setLabel] = useState('Add to cart');
  
  const onClick = () => {
    setDisabled(true);
    setLabel('Adding to cart ...');
    props.onClick(product.sku, 1);
  }

  return (
    <>
      <Button variant="primary" onClick={onClick} disabled={disabled}>
        {label}
      </Button>
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onClick: (sku, qty) => {
      dispatch(actions.addProduct(sku, qty));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddToCart);
