const unlock = (store) => {
    const currentState = store.getState();
    if (currentState.customer.locked === true) {
      return;
    }
  
    if (currentState.customer.afterUnlockCallback instanceof Function) {
      currentState.customer.afterUnlockCallback.call();
    }
  };
  
  export default unlock;
  