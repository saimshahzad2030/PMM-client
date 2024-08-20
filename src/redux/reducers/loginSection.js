import { createSlice } from "@reduxjs/toolkit";

const loginSectionSlice = createSlice({
  name: "modal",
  initialState: false,
  reducers: {
    setLoginSection(state, actions) {
      console.log(state, "state");
      console.log(actions, "actions"); 
      return actions.payload;
    },
  },
});

export const { setLoginSection } = loginSectionSlice.actions;
export default loginSectionSlice.reducer;
