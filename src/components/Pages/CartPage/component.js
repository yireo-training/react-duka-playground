import React from "react";
import { Query } from "react-apollo";
import Debug from "../../Test/Debug";
import ErrorPage from "../ErrorPage";
import Loading from "../../Utils/Loading";

const CartPage = props => {
  if (props.locked) {
    props.unLock();
  }

  if (!props.cartId) {
    return (
      <div className="CartPage">The cart is empty</div>
    );
  }

  return (
    <div className="CartPage">
      <Query query={props.query} variables={{ cartId: props.cartId }}>
        {({ loading, error, data }) => {
          if (loading) return <Loading />;
          if (error) return <ErrorPage error={error.message} />;

          return (
            <>
              <h1>Shopping Cart</h1>
              <Debug data={data} />
            </>
          );
        }}
      </Query>
    </div>
  );
};

export default CartPage;
