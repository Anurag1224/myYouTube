import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchDataSlice from "./searchDataSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchDataSlice,
    chat: chatSlice,
  },
});

export default store;
