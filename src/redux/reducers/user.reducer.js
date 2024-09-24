"use client";
import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "../reducer-services/user";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    setUser(state, action) {
      return action.payload;
    },
  },
});
export const { setUser } = userSlice.actions;
export default userSlice.reducer;
