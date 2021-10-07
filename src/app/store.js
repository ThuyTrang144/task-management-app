import { configureStore } from '@reduxjs/toolkit';
import { workItemReducer } from '../module/work-management/slice/workItemSlice';

const store = configureStore({
    reducer: workItemReducer
});
export default store;