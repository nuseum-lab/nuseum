import Image from '../../atom/Image/Image';
import Header from '../../organism/Header/Header';
import Layout from '../Layout';
import background from '../../../lib/assets/background.jpg';
import mockup from '../../../lib/assets/mockup.png';
import Section from '../../atom/Section/Section';
import { colorPalette } from '../../../lib/styles/colorPalette';
import Text from '../../atom/Text/Text';
import {
    ContactBox,
    ImageBox,
    Img,
    InformationBox,
    MockupImg,
    MockupWrapper,
    SecondSectionWrapper,
    SectionImage,
    SectionTextBox,
    ServiceDescription,
    ServiceDescriptionBox,
    ServiceDescriptionImg,
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
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    return (
        <Layout>
            <Header />
            <Image type='main' imgObject={background} />
            <Section
                style={{
                    minHeight: 680,
                }}
                bgColor={colorPalette.lightPink}
            >
                <SecondSectionWrapper>
                    <div>
                        <Text
                            fontStyle={{
                                fontWeight: 'primary',
                                fontSize: 'sub',
                            }}
                            style={{
                                textDecoration: 'underline',
                                marginBottom: '12px',
                                display: 'inline-block',
                            }}
                            as='span'
                        >
                            ABOUT US
                        </Text>
                        <Text
                            fontStyle={{
                                fontWeight: 'black',
                                fontSize: 'primary',
                            }}
                        >
                            NUSEUM
                        </Text>
                        <Text
                            fontStyle={{
                                whiteSpace: 'pre-line',
                                fontSize: 'subtitle',
                                fontWeight: 'black',
                            }}
                            style={{ marginBottom: '30px', width: '60%' }}
                        >
                            당신의 영양생리약리 박물관에서 무엇을 먹어야 하는지
                            알려주는 큐레이션 서비스
                        </Text>
                        <Text
                            fontStyle={{
                                whiteSpace: 'pre-line',
                                fontSize: 'normal',
                                fontWeight: 'normal',
                            }}
                            style={{
                                width: '60%',
                                marginBottom: '16px',
                                lineHeight: 1.4,
                            }}
                        >
                            서울대학교 영양생리약리연구실 창업팀 NUSEUM은
                            영양약리, 인체생리 지식을 기반으로 개인이 무엇을
                            먹고 있는지 이해하게 하고, 무엇을 먹어야 하는지
                            알려주고, 이를 쉽게 구매 또는 실천할 수 있도록 돕는
                            플랫폼을 구현합니다.
                        </Text>
                        <Text
                            fontStyle={{
                                whiteSpace: 'pre-line',
                                fontSize: 'normal',
                                fontWeight: 'normal',
                            }}
                            style={{ width: '60%', lineHeight: 1.4 }}
                        >
                            NUSEUM은 생리학, 약리학, 독성학, 식품학, 영양학
                            분야에서 18년 이상 연구한 대표자의 경험을 바탕으로
                            "올바르게 먹기 위한 정보"를 제공하고, 개인에게
                            맞추어진 건강한 식이를 실천할 수 있도록 돕는 디지털
                            시대의 혁신적인 개인맞춤영양관리를 구현하고자
                            성장하고 있습니다.
                        </Text>
                    </div>

                    <MockupWrapper>
                        <MockupImg
                            src={mockup}
                            alt=''
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        />
                    </MockupWrapper>
                </SecondSectionWrapper>
            </Section>

            <Section
                bgColor={colorPalette.whiteOrange}
                style={{ flexDirection: 'column', padding: '100px 0' }}
            >
                <ImageBox style={{ justifyContent: 'flex-start' }}>
                    <SectionImage src={section1} alt='man' />
                    <SectionTextBox>
                        <Text
                            fontStyle={{
                                fontSize: 'subtitle',
                                fontWeight: 'black',
                            }}
                            style={{ marginBottom: '16px' }}
                        >
                            NUSEUM{' '}
                            <span
                                style={{
                                    fontWeight: 900,
                                    fontFamily: 'initial',
                                }}
                            >
                                1
                            </span>
                        </Text>
                        <Text
                            fontStyle={{
                                whiteSpace: 'pre-line',
                                fontSize: 'normal',
                                fontWeight: 'normal',
                            }}
                        >
                            “나" 또는 “내가 돌보고 있는 소중한 사람"이{'\n'}
                            피해야 할 그리고 선택해야 할 영양성분과 {'\n'} 관련
                            최상위의 맞춤식품을 알려드립니다.​
                        </Text>
                    </SectionTextBox>
                </ImageBox>
                <ImageBox reverse={true} style={{ justifyContent: 'flex-end' }}>
                    <SectionTextBox>
                        <Text
                            fontStyle={{
                                fontSize: 'subtitle',
                                fontWeight: 'black',
                            }}
                            style={{ marginBottom: '16px' }}
                        >
                            NUSEUM{' '}
                            <span
                                style={{
                                    fontWeight: 900,
                                    fontFamily: 'initial',
                                }}
                            >
                                {' '}
                                2
                            </span>
                        </Text>
                        <Text
                            fontStyle={{
                                whiteSpace: 'pre-line',
                                fontSize: 'normal',
                                fontWeight: 'normal',
                            }}
                        >
                            뉴지엄은 Shop을 통해 {'\n'}
                            관련 우수한 제품을 쉽게 찾고 {'\n'}
                            개인맞춤영양을 실천할 수 있도록 돕습니다.​
                        </Text>
                    </SectionTextBox>
                    <SectionImage src={section2} alt='section2' />
                </ImageBox>
                <ImageBox style={{ justifyContent: 'flex-start' }}>
                    <SectionImage src={section3} alt='section3' />
                    <SectionTextBox>
                        <Text
                            fontStyle={{
                                fontSize: 'subtitle',
                                fontWeight: 'black',
                            }}
                            style={{ marginBottom: '16px' }}
                        >
                            NUSEUM{' '}
                            <span
                                style={{
                                    fontWeight: 900,
                                    fontFamily: 'initial',
                                }}
                            >
                                3{' '}
                            </span>
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
                    </SectionTextBox>
                </ImageBox>
                <ImageBox reverse={true} style={{ justifyContent: 'flex-end' }}>
                    <SectionTextBox>
                        <Text
                            fontStyle={{
                                fontSize: 'subtitle',
                                fontWeight: 'black',
                            }}
                            style={{ marginBottom: '16px' }}
                        >
                            NUSEUM{' '}
                            <span
                                style={{
                                    fontWeight: 900,
                                    fontFamily: 'initial',
                                }}
                            >
                                4
                            </span>
                        </Text>
                        <Text
                            fontStyle={{
                                whiteSpace: 'pre-line',
                                fontSize: 'normal',
                                fontWeight: 'normal',
                            }}
                        >
                            뉴지엄은 최신의 과학지식을 기반으로 하며,{'\n'}
                            디지털헬스케어 산업계에 “먹는 부분”을{'\n'} 담당하기
                            위해 성장하고 있습니다.​
                        </Text>
                    </SectionTextBox>
                    <SectionImage src={section4} alt='section4' />
                </ImageBox>
            </Section>

            <Section
                style={{
                    padding: '100px 0',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                }}
                bgColor={colorPalette.lightBlue}
            >
                <ServiceDescription>
                    <ServiceDescriptionImg>
                        <Img src={section5} alt='section5' />
                    </ServiceDescriptionImg>

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
                                fontWeight: 'light',
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
                </ServiceDescription>
                <img
                    src={logo}
                    style={{
                        width: '90%',
                        maxWidth: '1190px',
                        display: 'block',
                        margin: '0 auto',
                    }}
                    alt='logo'
                />
            </Section>
            <Section
                bgColor={'#101112'}
                style={{
                    height: 400,
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
                        fontStyle={{
                            fontSize: 'logo',
                            fontWeight: 'primary',
                        }}
                    >
                        Ready to get started?
                    </Text>
                    <Button
                        onClick={() => navigate('/question')}
                        style={{ marginTop: 30, fontSize: fontSize.button }}
                    >
                        EXPLORE NUSEUM
                    </Button>
                </div>
            </Section>

            <InformationBox
                style={{
                    minHeight: 250,
                    position: 'relative',
                    background: '#FAF8F6',
                }}
            >
                <img src={footerLogo} alt='footer' height='80px' />
                <ContactBox>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: 10,
                            width: 280,
                        }}
                    >
                        <Text
                            fontStyle={{
                                fontWeight: 'normal',
                                opacity: 0.6,
                            }}
                            style={{
                                cursor: 'pointer',

                                fontSize: '16px',
                            }}
                        >
                            Our Team
                        </Text>
                        <Text
                            as='a'
                            target='_blank'
                            href='https://instagram.com/nuseum_official?igshid=YWJhMjlhZTc='
                            fontStyle={{
                                fontWeight: 'normal',
                                opacity: 0.6,
                            }}
                            style={{
                                cursor: 'pointer',
                                fontSize: '16px',
                                textDecoration: 'none',
                                color: 'black',
                            }}
                        >
                            Instagram
                        </Text>
                        <Text
                            as='a'
                            target='_blank'
                            href='https://www.jiyoungkimlab.com/about'
                            fontStyle={{
                                fontWeight: 'normal',
                                opacity: 0.6,
                            }}
                            style={{
                                cursor: 'pointer',
                                fontSize: '16px',
                                textDecoration: 'none',
                                color: 'black',
                            }}
                        >
                            Blog
                        </Text>
                    </div>

                    <Text
                        fontStyle={{
                            fontWeight: 'normal',
                            opacity: 0.6,
                        }}
                        style={{
                            cursor: 'pointer',
                            fontSize: '16px',
                        }}
                    >
                        nuseum@nuseum-lab.com
                    </Text>
                </ContactBox>
            </InformationBox>
        </Layout>
    );
};
export default Home;
