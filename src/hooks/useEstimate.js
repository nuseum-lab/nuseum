const useEstimate = (nutrition, amount) => {
    let copy = { ...nutrition };
    // {
    //     "energy": 66.66666667,
    //     "protein": 0,
    //     "fat": 0,
    //     "carbohydrate": 0,
    //     "dietary_fiber": 0,
    //     "magnesium": 0,
    //     "vitamin_a": 0,
    //     "vitamin_d": 0,
    //     "vitamin_b6": 0,
    //     "folic_acid": 0,
    //     "vitamin_b12": 0,
    //     "tryptophan": 0,
    //     "dha_epa": 0,
    // }
    for (let key in copy) {
        if (copy[key] === 0) {
            continue;
        } else if (
            key === 'id' ||
            key === 'name' ||
            key === 'category' ||
            key === 'classifier' ||
            key === 'lang'
        ) {
            continue;
        } else {
            copy[key] = (Number(copy[key]) * amount) / 100;
        }
    }
    return { ...copy };
};

export default useEstimate;
