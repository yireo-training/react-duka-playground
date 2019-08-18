import React from "react";
import Address from "./Address";

const AddressBook = props => {
  const customer = props.data.customer;
  return (
    <div className="AddressBook">
      <h1>AddressBook</h1>
      {customer.addresses && customer.addresses.length ? (
        <>
          {customer.addresses.map((address, index) => (
            <Address key={index} address={address} />
          ))}
        </>
      ) : (
        "You have not added an address yet."
      )}
    </div>
  );
};

export default AddressBook;
