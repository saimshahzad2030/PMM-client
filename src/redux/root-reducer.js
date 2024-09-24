import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cart-reducer";
import userReducer from "./reducers/user.reducer";
export default combineReducers({
  userCart: cartReducer,
  user: userReducer,
});
