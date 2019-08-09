/**
 * Cart integrations with Redux following the ducks standard
 */

import cartReducer from "./reducer";
export { default as cartTypes } from "./types";
export { default as cartMiddleware } from "./middleware";
export { default as cartActions } from "./actions";
export { default as cartInitialState } from "./initialState";
export default cartReducer;

// End
