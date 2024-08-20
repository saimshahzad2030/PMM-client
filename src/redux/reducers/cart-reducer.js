"use client"
import { createSlice } from "@reduxjs/toolkit";
import { fetchCart } from "../reducer-services/cart";
 
const cartsSlice = createSlice({
  name: "carts",
  initialState: [],
  reducers: { 
    setCarts(state, action) {
      return action.payload;
    }, 
  },
  
});
export const { setCarts } = cartsSlice.actions;
export default cartsSlice.reducer;