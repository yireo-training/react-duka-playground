import types from "./types";
import lockReducer from "./reducers/lock";
import unlockReducer from "./reducers/unlock";

// Main reducer
const commonReducer = (state, action) => {
  if (state === undefined) {
    return {};
  }

  if (action.type === types.LOCK) {
    return lockReducer(state, action);
  }

  if (action.type === types.UNLOCK) {
    return unlockReducer(state);
  }

  return state;
};

export default commonReducer;
