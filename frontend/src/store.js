import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productListReducer,
  productDetailsReducer,
} from "./reducers/productReducers";
import {
  userloginReducer,
  userRegisterReducer,
  userDetailsReducer,
} from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducer";
import { orderCreateReducer } from "./reducers/orderCreateReducer";

const reducer = combineReducers({
  productList: productListReducer,
  cart: cartReducer,
  productDetails: productDetailsReducer,
  userLogin: userloginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  orderCreate: orderCreateReducer,
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userinfo"))
  : null;

const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

// spread operator ...middleware we are using multiple thunk or apply more middleware

// thunk just allows us to make asynchronous request form our action creatores

// redux dev tools actully be able to connect it and tehn see it through this import  or this

// createstore=>this is the function which help us to create our store

// combineReducers=>later on we are going to have multiple reducer for different parts of our application so this will conmbine all of them reducers so its just going to combine all of those into one large reducer.

// applyMiddleware is for redux thunks

// initialState is an empty Object
