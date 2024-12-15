import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    info: {},
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    addVideoInfo: (state, action) => {
      state.info = (action.payload);
    },
  },
});

export const { toggleMenu, closeMenu, addVideoInfo } = appSlice.actions;
export default appSlice.reducer;
