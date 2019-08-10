/**
 * Customer integrations with Redux following the ducks standard
 */

import customerReducer from "./reducer";
export { default as customerMiddleware } from "./middleware";
export { default as customerTypes } from "./types";
export { default as customerActions } from "./actions";
export { default as customerInitialState } from "./initialState";
export default customerReducer;

// End
