export default (state, action) => {
  let callback = action.afterUnlockCallback
    ? action.afterUnlockCallback
    : state.afterUnlockCallback;
    
  return Object.assign({}, state, {
    locked: true,
    afterUnlockCallback: callback
  });
};
