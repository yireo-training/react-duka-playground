import React from "react";
import { connect } from "react-redux";
import { loader } from "graphql.macro";
import { Query } from "react-apollo";
import cartActions from "../../state/redux/ducks/cart/actions";
import Debug from "../Test/Debug";
import ErrorPage from "./ErrorPage";
import Loading from "../Utils/Loading";

const CartPage = props => {
  const cartQuery = loader("src/state/graphql/queries/cart.graphql");

  if (!props.cartId) {
    return (
      <div className="CartPage">The cart is empty</div>
    );
  }

  return (
    <div className="CartPage">
      <Query query={cartQuery} variables={{ cartId: props.cartId }}>
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

const mapStateToProps = state => {
  return {
    cartId: state.cart.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeProduct: sku => {
      dispatch(cartActions.removeProduct(sku));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartPage);
