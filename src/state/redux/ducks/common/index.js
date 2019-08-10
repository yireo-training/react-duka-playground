/**
 * Common integrations with Redux following the ducks standard
 */

import commonReducer from "./reducer";
export { default as commonTypes } from "./types";
export { default as commonMiddleware } from "./middleware";
export { default as commonActions } from "./actions";
export { default as commonInitialState } from "./initialState";
export default commonReducer;

// End
