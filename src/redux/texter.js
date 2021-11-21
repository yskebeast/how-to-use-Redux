import { createSlice } from "@reduxjs/toolkit";

export const texterSlice = createSlice({
  name: "texter",
  initialState: {
    text: ""
  },
  reducers: {
    changeText: (state, action) => {
      state.text = action.payload;
    }
  }
});

export const { changeText } = texterSlice.actions;
export default texterSlice.reducer;
