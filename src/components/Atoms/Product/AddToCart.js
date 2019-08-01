import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux"
import cartActions from "../../../state/redux/ducks/cart/actions";

const AddToCart = props => {
  const product = props.product;
  const [inProgress, setInProgress] = useState(false);

  const onClick = () => {
    setInProgress(true);
    props.onClick(product.sku, 1, () => setInProgress(false));
  }

  let label = (inProgress) ? 'Adding to cart ...' : 'Add to cart';
  let disabled = (inProgress) ? true : false;

  return (
    <>
      <Button variant="primary" onClick={onClick} disabled={disabled}>
        {label}
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
    onClick: (sku, qty, afterUnlockCallback) => {
      dispatch(cartActions.setLock(true, afterUnlockCallback));
      dispatch(cartActions.addProduct(sku, qty));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddToCart);
