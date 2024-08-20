import { createSlice } from "@reduxjs/toolkit";

const shippingsSlice = createSlice({
  name: "shippings",
  initialState: [],
  reducers: {
    setShippings(state, action) {
      return action.payload;
    },
  },
});

export const { setShippings } = shippingsSlice.actions;
export default shippingsSlice.reducer;