import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favList: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.favList = [...state.favList, action.payload];
    },
    removeFavorite: (state, action) => {
      const toRemove = state.favList.indexOf(action.payload)
      const clone = [...state.favList]
      clone.splice(toRemove, 1);
      state.favList = [...clone]
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
