import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import cartReducer, { cartMiddleware } from "./ducks/cart";
import customerReducer from "./ducks/customer";
import messagesReducer from "./ducks/messages";
import { autoRehydrate } from "redux-phoenix";

const reducers = combineReducers({
  cart: cartReducer,
  messages: messagesReducer,
  customer: customerReducer
});

const initialState = {
  cart: {
    id: "",
    items: [],
    locked: false
  },
  messages: {
    items: []
  },
  customer: {
    token: "",
    locked: false
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
