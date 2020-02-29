import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cartActions from "state/redux/ducks/cart/actions";
import CartPage from "./component";
import EmptyCartPage from "./Empty";

const CartPageReduxContainer = props => {
  const dispatch = useDispatch();

  const reduxProps = {};
  reduxProps.updateCart = () => {
    dispatch(cartActions.updateCart());
  };

  reduxProps.removeCartItem = (id, name) => {
    dispatch(cartActions.removeCartItem(id, name));
  };

  reduxProps.unLock = () => {
    dispatch(cartActions.unlock());
  };

  reduxProps.cart = useSelector(state => state.cart);

  if (!reduxProps.cart.id) {
    return <EmptyCartPage {...reduxProps} />;
  }

  return <CartPage {...props} {...reduxProps} />;
};

export default CartPageReduxContainer;
