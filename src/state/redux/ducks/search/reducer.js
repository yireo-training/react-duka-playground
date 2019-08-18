import types from "./types";

// Add a new message
const updateSearchReducer = (state, action) => {
  return Object.assign({}, state, { search: action.search });
};

// Main reducer
const searchReducer = (state, action) => {
  if (state === undefined) return {};
  if (action.type === types.UPDATE_SEARCH) return updateSearchReducer(state, action);
  return state;
};

export default searchReducer;
