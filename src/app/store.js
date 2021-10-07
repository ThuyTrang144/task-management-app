import { configureStore } from '@reduxjs/toolkit';
import { workItemReducer } from '../module/work-management/slice/workItemSlice';
import { userReducer } from '../slice/userSlice';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    workItems: workItemReducer,
    users: userReducer,
});
const store = configureStore({
    reducer: rootReducer
});
export default store;
