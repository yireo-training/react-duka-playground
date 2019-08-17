import initialState from "../initialState";

export default (state, action) => {
  return Object.assign({}, state, initialState);
};
