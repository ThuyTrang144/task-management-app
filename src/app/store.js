import { configureStore } from '@reduxjs/toolkit';
import { workItemReducer } from '../module/work-management/slice/workItemSlice';
import { userReducer } from '../slice/userSlice';
import { combineReducers } from 'redux';
import { statusReducer } from '../slice/statusSlice';
import { importanceLevelReducer } from '../slice/importanceLevelSlice';
import { channelReducer } from '../slice/channelSlice';

const rootReducer = combineReducers({
    workItems: workItemReducer,
    users: userReducer,
    status: statusReducer,
    importanceLevel: importanceLevelReducer,
    channel: channelReducer 
});
const store = configureStore({
    reducer: rootReducer
});
export default store;
