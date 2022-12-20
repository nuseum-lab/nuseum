import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    energy: 0,
    protein: 0, //단백질
    fat: 0, // 지방
    carbohydrate: 0, // 탄수화물
    dietary_fiber: 0, // 식이섬유
    magnesium: 0, // 마그네슘
    vitamin_a: 0, // 비타민 A
    vitamin_d: 0, // 비타민 D
    vitamin_b6: 0, // 비타민 B6
    folic_acid: 0, // 엽산
    vitamin_b12: 0, // 비타민 B12
    tryptophan: 0, // 트립토판
    dha_epa: 0, // DHA+EPA
};

const foodSlice = createSlice({
    name: 'food',
    initialState,
    reducers: {
        add(state, action) {
            for (let key in state) {
                state[key] += action.payload[key];
            }
        },
        reset(state) {
            for (let key in state) {
                state[key] = 0;
            }
        },
    },
});

export const foodActions = foodSlice.actions;
export default foodSlice.reducer;
