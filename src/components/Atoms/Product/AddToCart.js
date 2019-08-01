import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux"
import cartActions from "../../../state/redux/ducks/cart/actions";

const AddToCart = props => {
  const product = props.product;
  const [label, setLabel] = useState('Add to cart');
  
  const onClick = () => {
    setLabel('Adding to cart ...');
    props.onClick(product.sku, 1);
  }

  let actualLabel = label;
  if (props.locked === false) {
    actualLabel = 'Ádd to cart'
  }

  return (
    <>
      <Button variant="primary" onClick={onClick} disabled={props.locked}>
        {actualLabel}
      </Button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    locked: state.cart.locked
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: (sku, qty) => {
      dispatch(cartActions.setLock(true));
      dispatch(cartActions.addProduct(sku, qty));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddToCart);
