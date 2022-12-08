import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isKorean: true,
};

const languageSlice = createSlice({
    initialState,
    name: 'language',
    reducers: {
        changeLanguage(state, action) {
            state.isKorean = action.payload;
        },
    },
});

export const languageActions = languageSlice.actions;
export default languageSlice.reducer;
