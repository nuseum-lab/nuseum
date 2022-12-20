import { configureStore } from '@reduxjs/toolkit';
import languageSlice from './language-slice';
import nutritionSlice from './nutrition-slice';

const store = configureStore({
    reducer: {
        language: languageSlice,
        nutrition: nutritionSlice,
    },
});

export default store;
