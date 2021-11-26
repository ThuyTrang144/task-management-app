import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { workItemListUrl } from '../../../constant';

const initialState = {
    workList: [],
    status: 'idle',
    error: null,
};
export const getWorkItemList = createAsyncThunk('workItemList/getWorkItemList', async (url) => {
    let { data } = await axios.get(url);
    return data.results;
});
export const addNewWorkItem = createAsyncThunk('workItemList/addNewWorkItem', async (workItem) => {
    try {
        const { data } = await axios.post(workItemListUrl, workItem);
        return data.results;
    } catch (error) {
        return console.log(error);
    }
});
const workItemSlice = createSlice({
    name: 'workItemList',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder
            .addCase(getWorkItemList.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getWorkItemList.fulfilled, (state, action) => {
                state.status ='succeeded';
                state.workList = action.payload;
            })
            .addCase(getWorkItemList.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addNewWorkItem.fulfilled, (state, action) => {
                state.workList.splice(0, 0, action.payload);
            });
    }
});
export const { filterWorkListByChannel } = workItemSlice.actions;
export const workItemReducer = workItemSlice.reducer;