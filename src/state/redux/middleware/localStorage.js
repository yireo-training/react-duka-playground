const LOCALSTORAGE_NAME = "apolloPlaygroundStore";

const localStorage = store => next => action => {
  localStorage[LOCALSTORAGE_NAME] = JSON.stringify(store.getState());
  console.log("Local Storage:", localStorage[LOCALSTORAGE_NAME]);
  return next(action);
};

const fetchLocalStorage = () => {
  let retrievedState;
  try {
    retrievedState = localStorage.getItem(LOCALSTORAGE_NAME);
    if (retrievedState === null) retrievedState = {};
    retrievedState = JSON.parse(retrievedState);
  } catch (err) {
    retrievedState = {};
  }

  console.log("Initial state", retrievedState);
  return retrievedState;
};

export { fetchLocalStorage };
export default localStorage;
