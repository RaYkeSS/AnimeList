import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favList: [],
  },
  reducers: {
    add: (state, action) => {
      state.favList = [...state.favList, action.payload];
    },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

export const { add } = favoriteSlice.actions;

export default favoriteSlice.reducer;
