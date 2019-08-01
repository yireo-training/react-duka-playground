const setLock = (store, action) => {
  const currentState = store.getState();
  if (currentState.cart.locked === false && currentState.cart.afterUnlockCallback instanceof Function) {
    currentState.cart.afterUnlockCallback.call();
  }
};

export default setLock;
