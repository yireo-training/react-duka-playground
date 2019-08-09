import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import cartReducer, { cartMiddleware, cartInitialState } from "./ducks/cart";
import customerReducer, { customerInitialState } from "./ducks/customer";
import messagesReducer, { messagesInitialState } from "./ducks/messages";
import { autoRehydrate } from "redux-phoenix";

const reducers = combineReducers({
  cart: cartReducer,
  messages: messagesReducer,
  customer: customerReducer
});

const initialState = {
  cart: cartInitialState,
  messages: messagesInitialState,
  customer: customerInitialState
};

const middleware = applyMiddleware(cartMiddleware);

const enhancements = compose(
  middleware,
  autoRehydrate,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(reducers, initialState, enhancements);

export default store;
