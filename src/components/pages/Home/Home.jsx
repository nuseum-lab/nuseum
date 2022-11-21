import Image from '../../atom/Image/Image';
import Header from '../../organism/Header/Header';
import Layout from '../Layout';
import main from '../../../lib/assets/MAIN.png';
import mockup from '../../../lib/assets/mockup.png';
import Section from '../../atom/Section/Section';
import { colorPalette } from '../../../lib/styles/colorPalette';
import Text from '../../atom/Text/Text';
import {
    ImageBox,
    Img,
    InformationBox,
    SectionImage,
    ServiceDescriptionBox,
} from './Home.styled';
import section1 from '../../../lib/assets/section1.png';
import section2 from '../../../lib/assets/section2.png';
import section3 from '../../../lib/assets/section3.png';
import section4 from '../../../lib/assets/section4.png';
import section5 from '../../../lib/assets/section5.png';
import logo from '../../../lib/assets/logo.png';
import Button from '../../atom/Button';
import footerLogo from '../../../lib/assets/footer-logo.png';
import { fontSize } from '../../../lib/styles/fontSize';

const Home = () => {
    return (
        <Layout>
            <Header />
            <Image type='main' imgObject={main} />
            <Section style={{ height: 600 }} bgColor={colorPalette.lightPink}>
                <div
                    style={{
                        width: '100%',
                        paddingTop: 100,
                        paddingLeft: 64,
                        paddingBottom: 100,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}
                >
                    <Text
                        fontStyle={{
                            fontWeight: 'primary',
                            fontSize: 'normal',
                        }}
                        style={{
                            textDecoration: 'underline',
                        }}
                        as='span'
                    >
                        ABOUT US
                    </Text>
                    <Text
                        fontStyle={{
                            fontWeight: 'primary',
                            fontSize: 'logo',
                        }}
                    >
                        NUSEUM
                    </Text>
                    <Text
                        fontStyle={{
                            whiteSpace: 'pre-line',
                            fontSize: 'sub',
                            fontWeight: 'primary',
                        }}
                    >
                        당신의 영양생리약리 박물관에서 {'\n'}무엇을 먹어야
                        하는지 알려주는 큐레이션 서비스
                    </Text>
                    <Text
                        fontStyle={{
                            whiteSpace: 'pre-line',
                            fontSize: 'normal',
                            fontWeight: 'normal',
                        }}
                        style={{ width: '50%' }}
                    >
                        서울대학교 영양생리약리연구실 창업팀 NUSEUM은 영양약리,
                        인체생리 지식을 기반으로 개인이 무엇을 먹고 있는지
                        이해하게 하고, 무엇을 먹어야 하는지 알려주고, 이를 쉽게
                        구매 또는 실천할 수 있도록 돕는 플랫폼을 구현합니다.
                    </Text>
                    <Text
                        fontStyle={{
                            whiteSpace: 'pre-line',
                            fontSize: 'normal',
                            fontWeight: 'normal',
                        }}
                        style={{ width: '50%' }}
                    >
                        NUSEUM은 생리학, 약리학, 독성학, 식품학, 영양학 분야에서
                        18년 이상 연구한 대표자의 경험을 바탕으로 "올바르게 먹기
                        위한 정보"를 제공하고, 개인에게 맞추어진 건강한 식이를
                        실천할 수 있도록 돕는 디지털 시대의 혁신적인
                        개인맞춤영양관리를 구현하고자 성장하고 있습니다.
                    </Text>

                    <div
                        style={{
                            position: 'absolute',
                            right: 0,
                            top: 0,
                            width: '45%',
                            overflow: 'hidden',
                            height: '100%',
                        }}
                    >
                        <img
                            src={mockup}
                            style={{ position: 'relatve', top: -50 }}
                            alt=''
                        />
                    </div>
                </div>
            </Section>

            <Section bgColor={colorPalette.whiteOrange}>
                <ImageBox>
                    <SectionImage src={section1} alt='man' />
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '30%',
                        }}
                    >
                        <Text
                            fontStyle={{
                                fontSize: 'sub',
                                fontWeight: 'logo',
                            }}
                        >
                            NUSEUM 1.
                        </Text>
                        <Text
                            fontStyle={{
                                whiteSpace: 'pre-line',
                                fontSize: 'normal',
                                fontWeight: 'normal',
                            }}
                        >
                            “나" 또는 “내가 돌보고 있는 소중한 사람"이 피해야 할
                            그리고 선택해야 할 영양성분과 관련 최상위의
                            맞춤식품을 알려드립니다.​
                        </Text>
                    </div>
                </ImageBox>
            </Section>
            <Section bgColor={colorPalette.whiteOrange}>
                <ImageBox>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '30%',
                        }}
                    >
                        <Text
                            fontStyle={{
                                fontSize: 'sub',
                                fontWeight: 'logo',
                            }}
                            style={{ textAlign: 'right' }}
                        >
                            NUSEUM 2.
                        </Text>
                        <Text
                            fontStyle={{
                                whiteSpace: 'pre-line',
                                fontSize: 'normal',
                                fontWeight: 'normal',
                            }}
                            style={{ textAlign: 'right' }}
                        >
                            뉴지엄은 Shop을 통해 관련 우수한 제품을 쉽게 찾고
                            개인맞춤영양을 실천할 수 있도록 돕습니다.​
                        </Text>
                    </div>
                    <SectionImage src={section2} alt='section2' />
                </ImageBox>
            </Section>
            <Section bgColor={colorPalette.whiteOrange}>
                <ImageBox>
                    <SectionImage src={section3} alt='section3' />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Text
                            fontStyle={{
                                fontSize: 'sub',
                                fontWeight: 'logo',
                            }}
                        >
                            NUSEUM 3.
                        </Text>
                        <Text
                            fontStyle={{
                                whiteSpace: 'pre-line',
                                fontSize: 'normal',
                                fontWeight: 'normal',
                            }}
                        >
                            뉴지엄은 Restaurant을 통해{'\n'} 나에게 필요한
                            최상위의 메뉴와 식당을 연결해 드립니다.
                        </Text>
                    </div>
                </ImageBox>
            </Section>
            <Section bgColor={colorPalette.whiteOrange}>
                <ImageBox>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Text
                            fontStyle={{
                                fontSize: 'sub',
                                fontWeight: 'logo',
                            }}
                            style={{ textAlign: 'right' }}
                        >
                            NUSEUM 4.
                        </Text>
                        <Text
                            fontStyle={{
                                whiteSpace: 'pre-line',
                                fontSize: 'normal',
                                fontWeight: 'normal',
                            }}
                            style={{ textAlign: 'right' }}
                        >
                            뉴지엄은 최신의 과학지식을 기반으로 하며,{'\n'}
                            디지털헬스케어 산업계에 “먹는 부분”을{'\n'} 담당하기
                            위해 성장하고 있습니다.​
                        </Text>
                    </div>
                    <SectionImage src={section4} alt='section4' />
                </ImageBox>
            </Section>
            <Section
                style={{
                    padding: '100px 64px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                }}
                bgColor={colorPalette.lightBlue}
            >
                <div
                    style={{
                        padding: '100px 64px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                    }}
                >
                    <Img src={section5} alt='section5' />
                    <ServiceDescriptionBox>
                        <Text
                            fontStyle={{
                                fontWeight: 'primary',
                                fontSize: 'sub',
                            }}
                            style={{
                                textDecoration: 'underline',
                                color: 'white',
                                marginBottom: 30,
                            }}
                        >
                            OUR SERVICE
                        </Text>
                        <Text
                            fontStyle={{
                                fontWeight: 'normal',
                                fontSize: 'normal',
                            }}
                            style={{ color: 'white', lineHeight: 1.5 }}
                        >
                            서울대학교 영양생리약리연구실 창업팀 NUSEUM은
                            아마존웹서비스/부산CIC의 도움을 받아 Autism Diet
                            Challenge를 수행 중에 있으며, 서울대학교 창업지원단,
                            SNU Venture Builder 프로그램의 지원을 받아 자폐아동
                            개인맞춤영양 솔루션을 개발 중에 있습니다. 추후
                            NUSEUM의 주요 서비스 예입니다.
                        </Text>
                    </ServiceDescriptionBox>
                </div>
                <img src={logo} style={{ width: '80%' }} alt='logo' />
            </Section>
            <Section
                bgColor={'#101112'}
                style={{
                    height: 370,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <div
                    style={{
                        height: 'auto',
                        width: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Text
                        style={{ color: 'white' }}
                        fontStyle={{ fontSize: 'logo', fontWeight: 'primary' }}
                    >
                        Ready to get started?
                    </Text>
                    <Button
                        style={{ marginTop: 30, fontSize: fontSize.button }}
                    >
                        EXPORE NUSEUM
                    </Button>
                </div>
            </Section>
            <InformationBox
                style={{
                    height: 300,
                    position: 'relative',
                    background: '#FAF8F6',
    
                }}
            >
                <img src={footerLogo} alt='footer' height='80px' />
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: 400,
                        }}
                    >
                        <Text
                            fontStyle={{
                                fontSize: 'sub',
                                fontWeight: 'normal',
                                opacity: 0.6,
                            }}
                            style={{ cursor: 'pointer' }}
                        >
                            Our Team
                        </Text>
                        <Text
                            fontStyle={{
                                fontSize: 'sub',
                                fontWeight: 'normal',
                                opacity: 0.6,
                            }}
                            style={{ cursor: 'pointer' }}
                        >
                            Blog
                        </Text>
                        <Text
                            fontStyle={{
                                fontSize: 'sub',
                                fontWeight: 'normal',
                                opacity: 0.6,
                            }}
                            style={{ cursor: 'pointer' }}
                        >
                            Contacts
                        </Text>
                    </div>
                    <Text
                        fontStyle={{
                            fontSize: 'normal',
                            fontWeight: 'normal',
                            opacity: 0.6,
                        }}
                        style={{ marginTop: 10, cursor: 'pointer' }}
                    >
                        nuseum@nuseum-lab.com
                    </Text>
                </div>
            </InformationBox>
        </Layout>
    );
};
export default Home;
