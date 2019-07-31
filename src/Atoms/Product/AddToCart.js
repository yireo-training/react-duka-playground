import React from "react";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux"
import actions from "../../state/redux/ducks/cart/actions";

const AddToCart = props => {
  const product = props.product;
  return (
    <>
      <Button variant="primary" onClick={() => props.onClick(product.sku, 1)}>
        Add to cart
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
