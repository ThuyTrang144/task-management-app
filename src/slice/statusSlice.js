import { createSlice } from '@reduxjs/toolkit';

const statusSlice = createSlice({
    name: 'statusList',
    initialState: {
        statusList: [],
        statusFilteredList: []
    },
    reducers: {
        getStatus: (state, action) => {
            state.statusList = action.payload;
            return state;
        },
        filterByStatus: (state, action) => {
            state.statusFilteredList = action.payload;
            return state;
        }
    }
});
export const { getStatus, filterByStatus } = statusSlice.actions;
export const statusReducer = statusSlice.reducer;