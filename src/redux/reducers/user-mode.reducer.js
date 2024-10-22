"use client";
import { createSlice } from "@reduxjs/toolkit";

const userMode = createSlice({
  name: "mode",
  initialState: "Buyer",
  reducers: {
    setMode(state, action) {
      return action.payload;
    },
  },
});
export const { setMode } = userMode.actions;
export default userMode.reducer;
