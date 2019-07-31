import types from "./types";

// Add a new message
const addMessageReducer = (state, action) => {
  let currentMessages = state.items ? state.items : [];
  let newMessages = [...currentMessages];
  newMessages.push({ text: action.messageText, type: action.messageType });
  return Object.assign({}, state, { items: newMessages });
};

// Remove an existing message
const removeMessageReducer = (state, action) => {
  let currentMessages = state.items ? state.items : [];
  let newMessages = [...currentMessages];
  newMessages.map((message, index) => {
    if (message.text === action.messageText)
    newMessages.splice(index, 1);
    return message;
  });

  return Object.assign({}, state, { items: newMessages });
};

// Main reducer
const messagesReducer = (state, action) => {
  if (state === undefined) return {};
  if (action.type === types.ADD_MESSAGE) return addMessageReducer(state, action);
  if (action.type === types.REMOVE_MESSAGE) return removeMessageReducer(state, action);
  return state;
};

export default messagesReducer;
