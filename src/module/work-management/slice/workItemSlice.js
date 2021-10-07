import { createSlice } from '@reduxjs/toolkit';

const workItemSlice = createSlice({
    name: 'workItemList',
    initialState: {
        workList: [],
    },
    reducers: {
        getList: (state, action) => {
            state.workList = action.payload;
            console.log('payload', action.payload,state.workList);
            return state;
        },
        addWorkItem: (state, action) => {
            state.workList.splice(0, 0, action.payload);
        },
    }
});
export const { addWorkItem, getList } = workItemSlice.actions;
export const workItemReducer = workItemSlice.reducer;