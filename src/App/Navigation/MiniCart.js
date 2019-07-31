import React from "react";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import { connect } from "react-redux"
import cartActions from "../../state/redux/ducks/cart/actions";

const MiniCart = (props) => {
  return (
    <Link to="/cart" className="nav-link" role="button">Checkout
      Cart
      {props.cart.id && <Badge variant="primary">{props.cart.items.length}</Badge>}
    </Link>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeProduct: sku => {
      dispatch(cartActions.removeProduct(sku));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MiniCart);