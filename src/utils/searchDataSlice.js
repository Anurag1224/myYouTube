import { createSlice } from "@reduxjs/toolkit";


const searchDataSlice = createSlice({
    name:'search',
    initialState: {

    },
    reducers: {
        cacheResults: (state, action) => {
            // state = {...action.payload, ...state};  
            state = Object.assign(state, action.payload);
        },
    }
});

export const {cacheResults} = searchDataSlice.actions;
export default searchDataSlice.reducer;