import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { foodActions } from '../../../../store/nutrition-slice';
import { Result, ResultBox } from './SearchNutritionBox.styled';

const SearchNutritionBox = ({
    openid,
    item,
    setInputModalOpen,
    setInputTitle,
}) => {
    const [height, setHeight] = useState(1);
    const renderNutrition = (param) => {
        switch (param) {
            case 'carbohydrate':
                return ['탄수화물', 'g'];
            case 'dha_epa':
                return ['DHA+EPA', '㎎'];
            case 'dietary_fiber':
                return ['식이섬유', 'g'];
            case 'energy':
                return ['에너지', '㎉'];
            case 'fat':
                return ['지방', 'g'];
            case 'folic_acid':
                return ['엽산', '㎍'];
            case 'magnesium':
                return ['마그네슘', '㎎'];
            case 'protein':
                return ['단백질', 'g'];
            case 'tryptophan':
                return ['트립토판', '㎎'];
            case 'vitamin_a':
                return ['비타민 A', '㎍'];
            case 'vitamin_b6':
                return ['비타민 B6', '㎎'];
            case 'vitamin_b12':
                return ['비타민 B12', '㎍'];
            case 'vitamin_d':
                return ['비타민 D', '㎍'];
            default:
                return null;
        }
    };
    const [keyCount, setKeyCount] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        setKeyCount(1);
        Object.entries(item).forEach((elem) =>
            elem[1] === 0 ||
            elem[0] === 'open' ||
            elem[0] === 'id' ||
            elem[0] === 'category' ||
            elem[0] === 'name'
                ? null
                : setKeyCount((prev) => prev + 1)
        );
        setHeight(keyCount * 30);
    }, [openid, keyCount, height, item]);

    return openid === item.id ? (
        <AnimatePresence>
            <ResultBox
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: height, opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.8 }}
            >
                {Object.keys(item).map((nutrition) =>
                    item[nutrition] === 0 ||
                    nutrition === 'open' ||
                    nutrition === 'id' ||
                    nutrition === 'category' ||
                    nutrition === 'name' ||
                    nutrition === 'classifier' ||
                    nutrition === 'lang' ? null : (
                        <Result>
                            {renderNutrition(nutrition)[0]}:{' '}
                            {item[nutrition].toFixed(3)}
                            {renderNutrition(nutrition)[1]}
                        </Result>
                    )
                )}

                <button
                    onClick={() => {
                        setInputModalOpen(true);
                        setInputTitle(item.name);
                        dispatch(foodActions.add(item));
                    }}
                >
                    추가하기
                </button>
            </ResultBox>
        </AnimatePresence>
    ) : null;
};

export default SearchNutritionBox;
