// Action Creators
import types from "./types";

const loginCustomer = (email, password) => {
  return {
    type: types.LOGIN_CUSTOMER,
    email: email,
    password: password
  };
};

const logoutCustomer = () => {
  return {
    type: types.LOGOUT_CUSTOMER
  };
};

const postLogoutCustomer = () => {
  return {
    type: types.POST_LOGOUT_CUSTOMER
  };
};

const setCustomerToken = token => {
  return {
    type: types.SET_CUSTOMER_TOKEN,
    token: token
  };
};

const createCustomer = customerData => {
  return Object.assign(customerData, {
    type: types.CREATE_CUSTOMER
  });
};

const saveCustomer = customerData => {
  return Object.assign(customerData, {
    type: types.SAVE_CUSTOMER
  });
};

const saveAddress = customerData => {
  return Object.assign(customerData, {
    type: types.SAVE_ADDRESS
  });
};

const setCustomerData = customerData => {
  return {
    type: types.SET_CUSTOMER_DATA,
    data: customerData
  };
};

export default {
  loginCustomer,
  logoutCustomer,
  postLogoutCustomer,
  setCustomerToken,
  createCustomer,
  saveCustomer,
  saveAddress,
  setCustomerData
};
