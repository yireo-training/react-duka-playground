/**
 * Customer integrations with Redux following the ducks standard
 */

import customerReducer from "./reducer";
export { default as customerTypes } from "./types";
export { default as customerActions } from "./actions";
export default customerReducer;

// End
