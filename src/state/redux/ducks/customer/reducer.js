import types from "./types";
import postLogoutCustomerReducer from "./reducers/postLogoutCustomer";
import setCustomerDataReducer from "./reducers/setCustomerData";
import setCustomerTokenReducer from "./reducers/setCustomerToken";

// Main reducer
const customerReducer = (state, action) => {
  if (state === undefined) {
    return {};
  }

  if (action.type === types.POST_LOGOUT_CUSTOMER) {
    return postLogoutCustomerReducer(state, action);
  }

  if (action.type === types.SET_CUSTOMER_DATA) {
    return setCustomerDataReducer(state, action);
  }

  if (action.type === types.SET_CUSTOMER_TOKEN) {
    return setCustomerTokenReducer(state, action);
  }

  return state;
};

export default customerReducer;
