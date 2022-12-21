// selected 가지고 활용
// list = {
//     breakfast: {
//         [], [], //..
//     },
//     lunch: {
//         [],[]
//     }
//     // ..
// }
const useCategory = (list) => {
    let numOfCategory = 0;
    let category = {
        채소류: 'broccoli',
        과일: 'strawberry',
        '콩/두부': 'bean',
        통곡물: 'rice',
        해조류: 'seaweed',
        '견과류 및 종실류': 'amond',
        '고기/생선/달걀': 'fish',
        '우유 및 유제품류': 'milk',
        버섯류: 'mushroom',
    };

    let checker = {
        broccoli: false,
        strawberry: false,
        bean: false,
        rice: false,
        seaweed: false,
        amond: false,
        fish: false,
        milk: false,
        mushroom: false,
    };
    for (let key in list) {
        for (let obj of list[key]) {
            if (Object.keys(category).includes(obj[2])) {
                checker[category[obj[2]]] = true;
                numOfCategory += 1;
            }
        }
    }

    return [numOfCategory, { ...checker }];
};

export default useCategory;
