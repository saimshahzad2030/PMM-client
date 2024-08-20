import { createSlice } from "@reduxjs/toolkit";

const favouritesSlice = createSlice({
  name: "favourites",
  initialState: [],
  reducers: {
    setFavourites(state, action) {
      return action.payload;
    },
  },
});

export const { setFavourites } = favouritesSlice.actions;
export default favouritesSlice.reducer;