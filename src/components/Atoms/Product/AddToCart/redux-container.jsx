import React from "react";
import { connect } from "react-redux"
import cartActions from "state/redux/ducks/cart/actions";
import commonActions from "state/redux/ducks/common/actions";
import AddToCart from "./component";

const AddToCartReduxContainer = props => {
  return (
      <AddToCart {...props} />
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
      dispatch(commonActions.lock(afterUnlockCallback));
      dispatch(cartActions.addProduct(sku, qty));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddToCartReduxContainer);
