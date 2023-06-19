import { createSlice } from "@reduxjs/toolkit";
const tokenslice = createSlice({
  name: "token",
  initialState: {
    token : null
  },reducers: {
    addtoken(state,action) {
      state.token = action.payload
    },}

});

export const tokenreducer = tokenslice.reducer;
export const {addtoken} = tokenslice.actions