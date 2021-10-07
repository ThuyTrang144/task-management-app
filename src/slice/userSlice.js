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
        filterUserList: (state, action) => {
            state.userFilteredList = action.payload;
            return state;
        }
    }
});

export const { getList, filterUserList } = userSlice.actions;
export const userReducer = userSlice.reducer;