import React from "react";
import { connect } from "react-redux";
import { loader } from "graphql.macro";
import cartActions from "state/redux/ducks/cart/actions";
import CartPageQueryContainer from "./query-container";
import EmptyCartPage from "./Empty";

const CartPageReduxContainer = props => {
  if (!props.cartId) {
    return <EmptyCartPage {...props} />;
  }

  const query = loader("state/graphql/queries/cart.graphql");
  return <CartPageQueryContainer {...props} query={query} />;
};

const mapStateToProps = state => {
  return {
    cartItems: state.cart.items,
    cartId: state.cart.id,
    locked: state.cart.locked
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateCart: () => {
      dispatch(cartActions.updateCart());
    },
    removeCartItem: (id, name) => {
      dispatch(cartActions.removeCartItem(id, name));
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
