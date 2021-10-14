import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { defaultChannelId } from '../constant';

export const getChannelList = createAsyncThunk('channelList/getChannelList', async (url) => {
    try {
        const { data } = await axios.get(url);
        return data.results;
    } catch(err) {
        console.log(err);
    }
});

const channelSlice = createSlice({
    name: 'channelList',
    initialState: {
        channelList: [],
        activeChannelId: defaultChannelId,
        status: 'idle'
    },
    reducers: {
        handleChangeChannel: (state, action) => {
            state.activeChannelId = action.payload;
        },
        // const addNewChannel = (text) => {
        //     const newChannel = {
        //         id: Math.random().toString().substring(2), name: text
        //     };
        //     setChannelList([newChannel, ...channelList]);
        // };
    },
    extraReducers(builder) {
        builder.addCase(getChannelList.fulfilled, (state, action) => {
            state.status = 'succeed';
            state.channelList = action.payload;
            return state;
        });
    }
});
export const { handleChangeChannel } = channelSlice.actions;
export const channelReducer = channelSlice.reducer;