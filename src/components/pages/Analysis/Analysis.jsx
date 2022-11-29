import { useState } from 'react';
import Text from '../../atom/Text/Text';
import BarGraph from '../../molecules/BarGraph/BarGraph';
import RadarGraph from '../../molecules/RadarGraph/RadarGraph';
import Header from '../../organism/Header/Header';
import Layout from '../Layout';
import {
    BackgroundWrapper,
    UtilLayout,
    UtilWrapper,
} from '../Question/Question.styled';
import { PointBox, PointLayout, Title } from './Analysis.styled';

const Analysis = () => {
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
                        <RadarGraph data={nutrition} />
                        <BarGraph data={nutrition} />
                    </UtilLayout>
                </UtilWrapper>
                <UtilWrapper>
                    <UtilLayout style={{ marginTop: 50, marginBottom: 50 }}>
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
                            <Text
                                fontStyle={{
                                    fontSize: 'sub',
                                    fontWeight: 'sub',
                                }}
                                style={{ marginTop: 30 }}
                            >
                                3/9
                            </Text>
                            <PointBox></PointBox>
                        </PointLayout>
                    </UtilLayout>
                </UtilWrapper>
            </BackgroundWrapper>
        </Layout>
    );
};

export default Analysis;
