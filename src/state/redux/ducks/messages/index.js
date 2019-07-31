/**
 * Messages integrations with Redux following the ducks standard
 */

import messagesReducer from "./reducer";

export { default as messagesTypes } from "./types";
export { default as messagesActions } from "./actions";
export default messagesReducer;

// End
