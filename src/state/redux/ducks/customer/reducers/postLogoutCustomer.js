import initialState from "../initialState";

export default state => {
  return Object.assign({}, state, initialState);
};
