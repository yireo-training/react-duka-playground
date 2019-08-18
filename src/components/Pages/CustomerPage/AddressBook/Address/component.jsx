import React from "react";
import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";

const Address = props => {
  const address = props.address;
  return (
    <div className="address">
      {address.default_billing && (
        <Badge variant="secondary">Default Billing Address</Badge>
      )}
      {address.default_shipping && (
        <Badge variant="secondary">Default Shipping Address</Badge>
      )}
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>City</td>
            <td>{address.city}</td>
          </tr>
          <tr>
            <td>Company</td>
            <td>{address.company}</td>
          </tr>
          <tr>
            <td>Country</td>
            <td>{address.country_id}</td>
          </tr>
          <tr>
            <td>Postcode</td>
            <td>{address.postcode}</td>
          </tr>
          <tr>
            <td>Street</td>
            <td>{address.street.join()}</td>
          </tr>
          <tr>
            <td>Telephone</td>
            <td>{address.telephone}</td>
          </tr>
          <tr>
            <td>VAT ID</td>
            <td>{address.vat_id}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Address;
