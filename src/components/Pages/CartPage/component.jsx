import React from "react";
import Table from "react-bootstrap/Table";
import PriceBox from "./PriceBox";
import "./component.css";

const CartPage = props => {
  return (
    <div className="CartPage">
      <h1>Shopping Cart</h1>
      <Table striped>
        <thead>
          <tr>
            <th>Product</th>
            <th>SKU</th>
            <th>Qty</th>
          </tr>
        </thead>
        <tbody>
          {props.cart.items.map(item => (
            <tr key={item.id}>
              <td>{item.product.name}</td>
              <td>{item.product.sku}</td>
              <td>{item.quantity}</td>
              <td>
                <button onClick={() => { props.removeCartItem(item.id, item.product.name) }}>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="bottom">
        <div className="additional" />
        <div className="totals">
          <Table striped>
            <tbody>
              <PriceBox
                label="Subtotal excl. tax"
                price={props.cart.prices.subtotal_excluding_tax}
              />
              <PriceBox
                label="Subtotal incl. tax with discount"
                price={props.cart.prices.subtotal_with_discount_excluding_tax}
              />
              <PriceBox
                label="Subtotal incl. tax"
                price={props.cart.prices.subtotal_including_tax}
              />
              <PriceBox
                label="Grand Total"
                price={props.cart.prices.grand_total}
              />
            </tbody>
          </Table>
        </div>
      </div>

      <button onClick={props.updateCart}>Update cart</button>
    </div >
  );
};

export default CartPage;
