import React from "react";
import { connect } from "react-redux";
import { customerActions } from "state/redux/ducks/customer";
import AddressEdit from "./component";

const extractAddressFromProps = props => {
  const addressId = props.match.params.id;
  let matchAddress = false;
  props.customerData.addresses.forEach(address => {
    if (parseInt(address.id) === parseInt(addressId)) {
      matchAddress = address;
    }
  });
  return matchAddress;
};

const AddressEditDataContainer = props => {
  const address = extractAddressFromProps(props);
  if (!address) {
    return <>Address was not found</>;
  }

  const newProps = Object.assign({}, props, { address });
  return <AddressEdit {...newProps} />;
};

const mapDispatchToProps = dispatch => {
  return {
    onSaveAddress: addressData => {
      dispatch(customerActions.saveAddress(addressData));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddressEditDataContainer);
