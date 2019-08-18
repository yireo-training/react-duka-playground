import React from "react";
import Order from "./Order";
import Table from "react-bootstrap/Table";

const Orders = props => {
  const orders = props.data.customerOrders.items;
  return (
    <div className="Orders">
      <h1>Orders</h1>
      {orders && orders.length ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Increment ID</th>
              <th>Created at</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <Order key={index} order={order} />
            ))}
          </tbody>
        </Table>
      ) : (
        "You have not placed any order yet."
      )}
    </div>
  );
};

export default Orders;
