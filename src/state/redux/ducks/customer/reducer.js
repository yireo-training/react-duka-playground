import types from "./types";
import loginCustomerReducer from "./reducers/loginCustomer";
import logoutCustomerReducer from "./reducers/logoutCustomer";
import setCustomerTokenReducer from "./reducers/setCustomerToken";

// Main reducer
const customerReducer = (state, action) => {
  if (state === undefined) {
    return {};
  }

  if (action.type === types.LOGIN_CUSTOMER) {
    return loginCustomerReducer(state, action);
  }

  if (action.type === types.LOGOUT_CUSTOMER) {
    return logoutCustomerReducer(state, action);
  }

  if (action.type === types.SET_CUSTOMER_TOKEN) {
    return setCustomerTokenReducer(state, action);
  }

  return state;
};

export default customerReducer;
