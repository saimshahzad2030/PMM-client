import { createSlice } from "@reduxjs/toolkit";

const walletsSlice = createSlice({
  name: "wallets",
  initialState: [],
  reducers: {
    setWallets(state, action) {
      return action.payload;
    },
  },
});

export const { setWallets } = walletsSlice.actions;
export default walletsSlice.reducer;