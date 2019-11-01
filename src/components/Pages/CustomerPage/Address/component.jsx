import React from "react";
import Address from "./View";

const AddressBook = props => {
  const customer = props.customerData;
  return (
    <div className="AddressBook">
      <h1>AddressBook</h1>
      {customer.addresses && customer.addresses.length ? (
        <>
          {customer.addresses.map(address => (
            <Address key={address.id} address={address} />
          ))}
        </>
      ) : (
        "You have not added an address yet."
      )}
    </div>
  );
};

export default AddressBook;
