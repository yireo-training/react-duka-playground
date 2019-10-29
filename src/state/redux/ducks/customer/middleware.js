// Middleware
import types from "./types";
import loginCustomer from "./middleware/loginCustomer";
import logoutCustomer from "./middleware/logoutCustomer";
import saveCustomer from "./middleware/saveCustomer";
import saveAddress from "./middleware/saveAddress";
import setCustomerToken from "./middleware/setCustomerToken";

export default store => {
  return next => {
    return async action => {
      next(action);

      switch (action.type) {
        case types.LOGIN_CUSTOMER:
          return loginCustomer(store, action);

        case types.LOGOUT_CUSTOMER:
          return logoutCustomer(store, action);

        case types.SAVE_CUSTOMER:
          return saveCustomer(store, action);

        case types.SAVE_ADDRESS:
          return saveAddress(store, action);

        case types.SET_CUSTOMER_TOKEN:
          return setCustomerToken(store, action);

        default:
          return;
      }
    };
  };
};
