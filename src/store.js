import { combineReducers } from "redux";
import { cartReducer } from "./reducers/cartReducer";
import { checkoutReducer } from "./reducers/checkoutReducer";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const finalReducer = combineReducers({
  cartReducer: cartReducer,
  checkoutReducer: checkoutReducer,
});

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const checkoutItems = localStorage.getItem("checkoutItems")
  ? JSON.parse(localStorage.getItem("checkoutItems"))
  : [];

const initialState = {
  cartReducer: { cartItems: cartItems },
  checkoutReducer: { checkoutItems: checkoutItems },
};
const composeEnhancers = composeWithDevTools({});

const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
