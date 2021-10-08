import { createSlice } from '@reduxjs/toolkit';

const importanceLevelSlice = createSlice({
    name: 'importanceLevelList',
    initialState: {
        importanceLevelList: [],
        importanceLevelFilteredList: []
    },
    reducers: {
        getImportanceLevel: (state, action) => {
            state.importanceLevelList = action.payload;
            return state;
        },
        filterByImportanceLevel: (state, action) => {
            state.importanceLevelFilteredList = action.payload;
            return state;
        }
    }
});
export const { getImportanceLevel, filterByImportanceLevel } = importanceLevelSlice.actions;
export const importanceLevelReducer = importanceLevelSlice.reducer;