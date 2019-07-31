import React from "react";
import Nav from "react-bootstrap/Nav";
import Badge from "react-bootstrap/Badge";
import { connect } from "react-redux"
import cartActions from "../../state/redux/ducks/cart/actions";

const MiniCart = (props) => {
  return (
    <Nav.Link href="/cart">
      Cart
      {props.cart.id && <Badge variant="primary">{props.cart.items.length}</Badge>}
    </Nav.Link>
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