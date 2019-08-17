// Middleware
import types from "./types";
import loginCustomer from "./middleware/loginCustomer";
import logoutCustomer from "./middleware/logoutCustomer";

export default store => {
  return next => {
    return async action => {
      next(action);

      switch (action.type) {
        case types.LOGIN_CUSTOMER:
          return loginCustomer(store, action);

        case types.LOGOUT_CUSTOMER:
          return logoutCustomer(store, action);

        default:
          return;
      }
    };
  };
};
