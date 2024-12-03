import {configureStore} from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchDataSlice from "./searchDataSlice";

const store = configureStore({
    reducer: {
        app: appSlice,
        search: searchDataSlice,
    }

});

export default store;