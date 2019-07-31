import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import cartReducers, { cartMiddleware } from "./ducks/cart";
import messagesReducers from "./ducks/messages";
import { autoRehydrate } from 'redux-phoenix';

const reducers = combineReducers({
  cart: cartReducers,
  messages: messagesReducers
});

const initialState = {
  cart: {
    id: "",
    items: []
  },
  messages: {
    items: []
  },
  customer: {
  }
};

const middleware = applyMiddleware(cartMiddleware);

const enhancements = compose(
  middleware,
  autoRehydrate,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(reducers, initialState, enhancements);

export default store;
