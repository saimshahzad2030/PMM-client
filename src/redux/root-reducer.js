import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cart-reducer";
import orderReducer from "./reducers/order-reducer";
import userReducer from "./reducers/user.reducer";
export default combineReducers({
  userCart: cartReducer,
  user: userReducer,
  userOrders: orderReducer,
});
