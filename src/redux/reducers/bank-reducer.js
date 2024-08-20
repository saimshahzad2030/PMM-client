import { createSlice } from "@reduxjs/toolkit";

const banksSlice = createSlice({
  name: "banks",
  initialState: [],
  reducers: {
    setBanks(state, action) {
      return action.payload;
    },
  },
});

export const { setBanks } = banksSlice.actions;
export default banksSlice.reducer;