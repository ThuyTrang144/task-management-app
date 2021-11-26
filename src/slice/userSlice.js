import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice( {
    name: 'userList',
    initialState: {
        userList: [],
        userFilteredList: []
    },
    reducers: {
        getList: (state, action) => {
            state.userList = action.payload;
            return state;
        },
        filterByUser: (state, action) => {
            state.userFilteredList = action.payload;
            return state;
        }
    }
});

export const { getList, filterByUser } = userSlice.actions;
export const userReducer = userSlice.reducer;