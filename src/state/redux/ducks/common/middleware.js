// Middleware
import types from "./types";
import unlock from "./middleware/unlock";

const commonMiddleware = store => {
  return next => {
    return async action => {
      next(action);

      switch (action.type) {
        case types.UNLOCK:
          return unlock(store);

        default:
          return;
      }
    };
  };
};

export default commonMiddleware;
