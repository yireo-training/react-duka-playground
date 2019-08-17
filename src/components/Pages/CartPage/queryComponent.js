import React from "react";
import { Query } from "react-apollo";
import ErrorPage from "../ErrorPage";
import Loading from "../../Utils/Loading";
import EmptyCartPage from "./EmptyCartPage";
import CartPage from "./CartPage";

const CartPageQuery = props => {
  if (props.locked) {
    props.unLock();
  }

  if (!props.cartId) {
    return <EmptyCartPage />;
  }

  return (
    <Query query={props.query} variables={{ cartId: props.cartId }}>
      {({ loading, error, data }) => {
        if (loading) return <Loading />;
        if (error) return <ErrorPage error={error.message} />;
        if (!data.cart.items || !data.cart.items.length) return <EmptyCartPage />;

        return <CartPage {...data} />;
      }}
    </Query>
  );
};

export default CartPageQuery;
