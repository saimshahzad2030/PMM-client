import { createSlice } from "@reduxjs/toolkit";

const addressesSlice = createSlice({
  name: "addresses",
  initialState: [],
  reducers: {
    setAddresses(state, action) {
      return action.payload;
    },
  },
});

export const { setAddresses } = addressesSlice.actions;
export default addressesSlice.reducer;