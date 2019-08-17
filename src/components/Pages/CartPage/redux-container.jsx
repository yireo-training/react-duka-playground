import React from "react";
import { connect } from "react-redux";
import { loader } from "graphql.macro";
import cartActions from "state/redux/ducks/cart/actions";
import CartPageQueryContainer from "./query-container";

const CartPageReduxContainer = props => {
  const query = loader("state/graphql/queries/cart.graphql");
  return <CartPageQueryContainer {...props} query={query} />;
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
      dispatch(cartActions.unlock());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartPageReduxContainer);
