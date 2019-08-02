import React from "react";
import { connect } from "react-redux";
import { loader } from "graphql.macro";
import cartActions from "state/redux/ducks/cart/actions";
import CartPage from "./component";

const CartPageContainer = props => {
  let newProps = { ...props };
  newProps.query = loader("state/graphql/queries/cart.graphql");
  return <CartPage {...newProps} />;
};

const mapStateToProps = state => {
  return {
    cartId: state.cart.id,
    locked: state.cart.locked
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeProduct: sku => {
      dispatch(cartActions.removeProduct(sku));
    },
    unLock: () => {
      dispatch(cartActions.setLock(false));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartPageContainer);
