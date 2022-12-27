import { useEffect, useState } from 'react';
import * as dfd from 'danfojs';

import BarGraph from '../../molecules/BarGraph/BarGraph';
import RadarGraph from '../../molecules/RadarGraph/RadarGraph';
import Header from '../../organism/Header/Header';
import Layout from '../Layout';
import {
    BackgroundWrapper,
    UtilLayout,
    UtilWrapper,
} from '../Question/Question.styled';
import {
    Point,
    PointBox,
    PointImg,
    PointLayout,
    Title,
} from './Analysis.styled';
import cbroccoli from '../../../lib/assets/color/broccoli.png';
import broccoli from '../../../lib/assets/no-color/broccoli.png';
import cstrawberry from '../../../lib/assets/color/strawberry.png';
import strawberry from '../../../lib/assets/no-color/strawberry.png';
import cbean from '../../../lib/assets/color/bean.png';
import bean from '../../../lib/assets/no-color/bean.png';
import crice from '../../../lib/assets/color/rice.png';
import rice from '../../../lib/assets/no-color/rice.png';
import cseaweed from '../../../lib/assets/color/seaweed.png';
import seaweed from '../../../lib/assets/no-color/seaweed.png';
import camond from '../../../lib/assets/color/amond.png';
import amond from '../../../lib/assets/no-color/amond.png';
import cfish from '../../../lib/assets/color/fish.png';
import fish from '../../../lib/assets/no-color/fish.png';
import cmilk from '../../../lib/assets/color/milk.png';
import milk from '../../../lib/assets/no-color/milk.png';
import cmushroom from '../../../lib/assets/color/mushroom.png';
import mushroom from '../../../lib/assets/no-color/mushroom.png';
import Text from '../../atom/Text/Text';
import Button from '../../atom/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../atom/Loading/Loading';
import { useSelector } from 'react-redux';
import useCategory from '../../../hooks/useCategory';
import useCalculate from '../../../hooks/useCalculate';

const img = {
    broccoli: { eat: cbroccoli, noEat: broccoli, name: '채소' },
    strawberry: { eat: cstrawberry, noEat: strawberry, name: '과일' },
    bean: { eat: cbean, noEat: bean, name: '콩/두부' },
    rice: { eat: crice, noEat: rice, name: '통곡물' },
    seaweed: { eat: cseaweed, noEat: seaweed, name: '해조류' },
    amond: { eat: camond, noEat: amond, name: '견과류 및 종실류' },
    fish: { eat: cfish, noEat: fish, name: '고기/생선/달걀' },
    milk: { eat: cmilk, noEat: milk, name: '우유 및 유제품류' },
    mushroom: { eat: cmushroom, noEat: mushroom, name: '버섯류' },
};

const Analysis = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [curationFoodList, setCurationFoodList] = useState(null);
    const [curationNutritionList, setCurationNutritionList] = useState(null);
    const [foodDataFrame, setFoodDataFrame] = useState(null);
    const [supplementDataFrame, setSupplementDataFrame] = useState(null);

    const [loading, setLoading] = useState(false);
    const nutritionWithSupplement = useSelector(
        (state) => state.nutrition.withSupplement
    );
    const nutritionWithoutSupplement = useSelector(
        (state) => state.nutrition.withoutSupplement
    );

    const [numOfcategory, category] = useCategory(location.state.foodList);

    const upperIntake = useCalculate(
        location.state.gender ? 'M' : 'F',
        Number(location.state.age)
    );

    const readDB = async () => {
        setLoading(true);
        try {
            let curationDB = await dfd.readExcel(
                'https://raw.githubusercontent.com/nuseum-lab/nuseum/test/src/lib/assets/data/fooddb.xlsx'
            );

            let curationNutritionDB = await dfd.readExcel(
                'https://raw.githubusercontent.com/nuseum-lab/nuseum/test/src/lib/assets/data/food-nutrition.xlsx'
            );

            // let foodDB = await dfd.readExcel(
            //     'https://raw.githubusercontent.com/nuseum-lab/nuseum/test/src/lib/assets/data/db/food_DB.xlsx'
            // );

            // let supplementDB = await dfd.readExcel(
            //     'https://raw.githubusercontent.com/nuseum-lab/nuseum/test/src/lib/assets/data/db/supplement_DB.xlsx'
            // );

            // setSupplementDataFrame(supplementDB.$data);
            // setFoodDataFrame(foodDB.$data);

            setCurationFoodList(
                curationDB.$dataIncolumnFormat.map((item) => {
                    let index = 0;
                    for (let elem of item) {
                        if (elem === ' ') break;
                        index += 1;
                    }
                    return item.slice(0, index);
                })
            );

            setCurationNutritionList(
                curationNutritionDB.$dataIncolumnFormat.map((item) => {
                    let index = 0;
                    for (let elem of item) {
                        if (elem === ' ') break;
                        index += 1;
                    }
                    return item.slice(0, index);
                })
            );
        } catch (err) {
            console.log(err);
        }
    };

    const recommendStart = (
        intakeRatio,
        nutritionWithCategory,
        hateList,
        removeTargetNutrition
    ) => {
        // intakeRatio 순회하면서 음수인 요소는 제외한다.

        // 과잉된 영양성분들
        let overdoseNutritents = [];
        for (let key in intakeRatio) {
            if (intakeRatio[key] < 0) {
                overdoseNutritents.push(key);
            }
        }

        // dha_epa : "DHA+EPA(mg)" 형태의 딕셔너리로 바꾸기
        let nutritionNameDictionary = {
            dha_epa: 'DHA+EPA(mg)',
            folic_acid: '엽산(DFE)(㎍)',
            magnesium: '마그네슘(㎎)',
            tryptophan: '트립토판(㎎)',
            vitamin_a: 'total 비타민 A(㎍)',
            dietary_fiber: '총 식이섬유(g)',
            vitamin_b6: '비타민 B6(㎎)',
            vitamin_b12: '비타민 B12(㎍)',
            vitamin_d: '비타민 D(㎍)',
        };

        // 과잉되지 않은 영양성분에 대한 한글명 추출후 딕셔너리에 키 밸류 쌍으로 저장
        for (let key in overdoseNutritents) {
            delete nutritionNameDictionary[overdoseNutritents[key]];
        }

        // 한글명 순회
        for (let nameObj of Object.entries(nutritionNameDictionary)) {
            // nutritionWithCategory 딕셔너리 키값이 한글 영양성분명이므로
            // 각각의 딕셔너리 밸류를 순회한다 -> 각 밸류는 영양성분에 대응되는 음식 리스트
            let foodListWithNutrition = [...nutritionWithCategory[nameObj[1]]];

            for (let hateFood of hateList) {
                // 과잉된 영양성분을 제외한 영양성분 리스트를 각각 순회하다가
                // 각 영양성분에 해당하는 음식 리스트중에
                // hateList에 포함되는 음식이 있는 경우 삭제하는 로직 -> 하나도 포함되어 있지 않다고 판단ㄷ
                if (foodListWithNutrition.indexOf(hateFood) !== -1) {
                    foodListWithNutrition = [
                        ...foodListWithNutrition.slice(
                            0,
                            foodListWithNutrition.indexOf(hateFood)
                        ),
                        ...foodListWithNutrition.slice(
                            foodListWithNutrition.indexOf(hateFood) + 1
                        ),
                    ];
                }
            }

            nutritionWithCategory[nameObj[1]] = [...foodListWithNutrition];
        }
    };

    useEffect(() => {
        readDB();
    }, []);

    useEffect(() => {
        // 큐레이션 리스트 DB 읽어온 이후 -> 알고리즘 시작
        // curationFoodList : fooddb.xlsx 시트 1
        // curationNutritionList : food-nutrition.xlsx -> fooddb.xlsx 시트 2
        if (curationFoodList && curationNutritionList) {
            setLoading(false);
        } else {
            return;
        }

        // 1. 객체로부터 하루동안 섭취한 영양성분 데이터 읽어오기
        // nutrition 상태값 사용하면 됨

        // 2. 영양소 최대 섭취량 - upperIntake 활용
        // m_cre_list => 기준치 X 일수
        for (let i in upperIntake) {
            if (i === 'energy') {
                continue;
            }
            // 최대치 X 일수
            upperIntake[i] *= 2;
        }

        // (기준치 - 섭취량) / 기준치
        // intakeRatio === ReDn 까지 구했음
        let intakeRatio = {};
        for (let i in upperIntake) {
            if (upperIntake[i]) {
                intakeRatio[i] =
                    (upperIntake[i] - nutritionWithSupplement[i]) /
                    upperIntake[i];
            }
        }

        // 달걀 & 사과 각 50g에 대한 데이터
        // {
        //     "dietary_fiber": 1,
        //     "magnesium": 0.987972972972973,
        //     "vitamin_a": 0.862875,
        //     "vitamin_d": -0.14299999999999996,
        //     "vitamin_b6": 0.9820000000000001,
        //     "folic_acid": 0.8640000000000001,
        //     "vitamin_b12": 0.35208333333333336,
        //     "tryptophan": 0.8816666666666667,
        //     "dha_epa": 0.5718875
        // }

        // 추천 식품 시트2와 비교 시작 fd = pd.read_excel , nts = pd.read_excel
        const category = [
            '채소',
            '과일',
            '콩/두부',
            '통곡물',
            '버섯',
            '해조류',
            '견과',
            '고기/생선/달걀',
            '유제품',
        ];
        const nutritionName = [
            'DHA+EPA(mg)',
            '엽산(DFE)(㎍)',
            '마그네슘(㎎)',
            '트립토판(㎎)',
            'total 비타민 A(㎍)',
            '총 식이섬유(g)',
            '비타민 B6(㎎)',
            '비타민 B12(㎍)',
            '비타민 D(㎍)',
        ];

        let foodListWithCategory = {};

        for (let index in category) {
            // 채소 : [...]
            foodListWithCategory[category[index]] = curationFoodList[index];
        }

        let nutritionWithCategory = {};
        for (let index in nutritionName) {
            nutritionWithCategory[nutritionName[index]] =
                curationNutritionList[index];
        }

        const hateList = [
            '소고기(안심)',
            '소고기(사태)',
            '닭고기',
            '김',
            '달걀',
            '장어',
        ];
        const removeTargetNutrition = ['비타민B6', '비타민B12', '트립토판'];

        // nutritionWithCategory
        // DHA+EPA : [...]
        // 마그네슘 : [...]
        recommendStart(
            intakeRatio,
            nutritionWithCategory,
            hateList,
            removeTargetNutrition
        );
        // 여기서부터 추천로직 시작
        // recommend(intakeRatio, nutritionWithCategory, hateList, removeTargetNutrtition)
    }, [curationFoodList, foodDataFrame, supplementDataFrame]);

    const range = useCalculate(
        location.state.gender ? 'M' : 'F',
        Number(location.state.age)
    );

    return (
        <Layout>
            {loading ? <Loading /> : null}
            <Header />
            <Title>
                <Text
                    fontStyle={{
                        fontWeight: 'primary',
                        fontSize: 'sub_title',
                    }}
                    style={{ marginBottom: '12px' }}
                >
                    식이분석
                </Text>
                <Text
                    fontStyle={{
                        fontWeight: 'normal',
                        fontSize: 'normal',
                    }}
                >
                    오늘의 식이 분석 결과입니다 :)
                </Text>
            </Title>
            <BackgroundWrapper style={{ height: 'auto' }}>
                <UtilWrapper style={{ alignItems: 'flex-start' }}>
                    <UtilLayout style={{ marginTop: 50, marginBottom: 50 }}>
                        <Text
                            fontStyle={{
                                fontSize: 'normal',
                                fontWeight: 'normal',
                            }}
                        >
                            충분/권장섭취량 대비 실제 섭취량(%)
                        </Text>
                        {nutritionWithSupplement ? (
                            <RadarGraph
                                data={nutritionWithSupplement}
                                range={range}
                                dateCount={1}
                                dataWithoutSupplement={
                                    nutritionWithoutSupplement
                                }
                            />
                        ) : null}
                        <BarGraph data={nutritionWithSupplement} />
                    </UtilLayout>
                </UtilWrapper>
                <UtilWrapper
                    style={{
                        height: 'inherit',
                        alignItems: 'flex-start',
                        // width: '40%',
                    }}
                >
                    <UtilLayout
                        style={{
                            marginTop: 50,
                            marginBottom: 50,
                            height: '100%',
                        }}
                    >
                        <Text
                            fontStyle={{
                                fontSize: 'normal',
                                fontWeight: 'normal',
                            }}
                        >
                            골고루 지수
                        </Text>
                        <Text
                            fontStyle={{
                                fontSize: 'main_title',
                                fontWeight: 'sub',
                            }}
                            style={{ margin: '30px 0' }}
                        >
                            {((numOfcategory / 9) * 100).toFixed(0)}점
                        </Text>
                        <PointLayout>
                            <Text fontStyle={{ fontSize: 'sub_title' }}>
                                {numOfcategory}/9
                            </Text>
                            <PointBox>
                                {Object.keys(img).map((item) => (
                                    <Point key={item}>
                                        <PointImg
                                            src={
                                                category[item]
                                                    ? img[item].eat
                                                    : img[item].noEat
                                            }
                                        />
                                        <Text fontStyle={{ fontSize: 'menu' }}>
                                            {img[item].name}
                                        </Text>
                                    </Point>
                                ))}
                            </PointBox>
                        </PointLayout>
                    </UtilLayout>
                </UtilWrapper>
            </BackgroundWrapper>
            <Button
                onClick={() => navigate('/curation')}
                style={{
                    margin: '80px auto',
                    display: 'block',
                    backgroundColor: '#5D4E44',
                    color: 'white',
                    marginBottom: 80,
                }}
            >
                식품 추천 받으러 가기
            </Button>
        </Layout>
    );
};

export default Analysis;
