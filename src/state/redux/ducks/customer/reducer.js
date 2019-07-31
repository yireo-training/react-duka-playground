import types from "./types";

// Login the customer
const loginCustomerReducer = (state, action) => {
    return state;
};

// Logout the customer
const logoutCustomerReducer = (state, action) => {
    if (state.token) delete state.token;
    return state;
};

// Main reducer
const customerReducer = (state, action) => {
  if (state === undefined) return {};
  if (action.type === types.LOGIN_CUSTOMER) return loginCustomerReducer(state, action);
  if (action.type === types.LOGOUT_CUSTOMER) return logoutCustomerReducer(state, action);
  return state;
};

export default customerReducer;
