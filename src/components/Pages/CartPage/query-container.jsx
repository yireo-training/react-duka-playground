import React from "react";
import ErrorPage from "../ErrorPage";
import Loading from "../../Utils/Loading";
import EmptyCartPage from "./Empty";
import CartPage from "./component";
import { useQuery } from '@apollo/react-hooks';

const CartPageQueryContainer = props => {
  if (props.locked) {
    props.unLock();
  }

  const { loading, error, data } = useQuery(props.query, { variables: { cartId: props.cartId } });

  if (loading) return <Loading />;
  if (error) return <ErrorPage error={error.message} />;
  if (!data.cart.items || !data.cart.items.length) return <EmptyCartPage />;

  const newProps = { ...props, ...data };
  return <CartPage {...newProps} />;
};

export default CartPageQueryContainer;
