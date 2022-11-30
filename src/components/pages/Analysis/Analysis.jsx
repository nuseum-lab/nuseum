import { useEffect, useState } from 'react';

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
import useCalculate from '../../../hooks/useCalculate';

const img = {
    broccoli: { eat: cbroccoli, noEat: broccoli, name: '야채' },
    strawberry: { eat: cstrawberry, noEat: strawberry, name: '과일' },
    bean: { eat: cbean, noEat: bean, name: '콩/두부' },
    rice: { eat: crice, noEat: rice, name: '통곡물' },
    seaweed: { eat: cseaweed, noEat: seaweed, name: '해조류' },
    amond: { eat: camond, noEat: amond, name: '아몬드' },
    fish: { eat: cfish, noEat: fish, name: '고기/생선/달걀' },
    milk: { eat: cmilk, noEat: milk, name: '유제품' },
    mushroom: { eat: cmushroom, noEat: mushroom, name: '버섯' },
};

const Analysis = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [nutrition, setNutrition] = useState({
        energy: 0,
        protein: 0,
        fat: 0,
        carbohydrate: 0,
        dietary_fiber: 0,
        magnesium: 0,
        vitamin_a: 0,
        vitamin_d: 0,
        vitamin_b6: 0,
        folic_acid: 0,
        vitamin_b12: 0,
        tryptophan: 0,
        dha_epa: 0,
    });

    useEffect(() => {
        setNutrition({
            energy: 741.071849989,
            protein: 38.748302778479996,
            fat: 30.061191666610004,
            carbohydrate: 67.11065833848001,
            dietary_fiber: 0.278775,
            magnesium: 44.285075,
            vitamin_a: 102.2849999969,
            vitamin_d: 12.865,
            vitamin_b6: 0.11599999999999999,
            folic_acid: 95.640775,
            vitamin_b12: 3.526625,
            tryptophan: 194.39999999999998,
            dha_epa: 1391.0140000000001,
        });
    }, []);

    const range = useCalculate(
        location.state.gender ? 'M' : 'F',
        Number(location.state.age)
    );

    return (
        <Layout>
            <Header />
            <Title>
                <Text
                    fontStyle={{
                        fontWeight: 'primary',
                        fontSize: 'subtitle',
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
            <BackgroundWrapper
                style={{ height: 'auto', justifyContent: 'space-around' }}
            >
                <UtilWrapper style={{ alignItems: 'flex-start', width: '40%' }}>
                    <UtilLayout style={{ marginTop: 50, marginBottom: 50 }}>
                        <Text
                            fontStyle={{
                                fontSize: 'normal',
                                fontWeight: 'normal',
                            }}
                        >
                            충분/권장섭취량 대비 실제 섭취량(%)
                        </Text>
                        {nutrition ? (
                            <RadarGraph
                                data={nutrition}
                                range={range}
                                dateCount={1}
                            />
                        ) : null}
                        <BarGraph data={nutrition} />
                    </UtilLayout>
                </UtilWrapper>
                <UtilWrapper
                    style={{
                        height: 'inherit',
                        alignItems: 'flex-start',
                        width: '40%',
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
                            33점
                        </Text>
                        <PointLayout>
                            <Text fontStyle={{ fontSize: 'sub_title' }}>
                                3/9
                            </Text>
                            <PointBox>
                                {Object.keys(img).map((item) => (
                                    <Point key={item}>
                                        <PointImg src={img[item].eat} />
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
                    margin: '0 auto',
                    display: 'block',
                    backgroundColor: '#5D4E44',
                    color: 'white',
                    marginBottom: 30,
                }}
            >
                식품 추천 받으러 가기
            </Button>
        </Layout>
    );
};

export default Analysis;