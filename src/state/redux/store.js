import { createStore } from "redux";
import { combineReducers, applyMiddleware, compose } from "redux";
import cartReducers, { cartMiddleware } from "./ducks/cart";
import localStorageMiddleware, { fetchLocalStorage } from "./middleware/localStorage";

const reducers = combineReducers({cart: cartReducers});

const initialState = fetchLocalStorage();

const middleware = applyMiddleware(
  localStorageMiddleware,
  cartMiddleware
);

const enhancements = compose(
  middleware,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store = createStore(reducers, initialState, enhancements);

export default store;
