import Image from '../../atom/Image/Image';
import Header from '../../organism/Header/Header';
import Layout from '../Layout';
import background from '../../../lib/assets/background.jpg';
import mockup from '../../../lib/assets/mockup.png';
import Section from '../../atom/Section/Section';
import { colorPalette } from '../../../lib/styles/colorPalette';
import Text from '../../atom/Text/Text';
import { Footer, FooterWrap } from '../../atom/Footer/Footer';

import {
    ContactBox,
    ImageBox,
    Img,
    InformationBox,
    MockupImg,
    MockupWrapper,
    SecondSectionWrapper,
    SectionImage,
    Strong,
    SectionTextBox,
    ServiceDescription,
    ServiceDescriptionBox,
    ServiceDescriptionImg,
    FooterTop,
} from './Home.styled';
import section1 from '../../../lib/assets/section1.png';
import section2 from '../../../lib/assets/section2.png';
import section3 from '../../../lib/assets/section3.png';
import section4 from '../../../lib/assets/section4.png';
import section5 from '../../../lib/assets/section5.png';
import gray_logo from '../../../lib/assets/gray_logo.png';
import Button from '../../atom/Button';
import footerLogo from '../../../lib/assets/footer-logo.png';
import { fontSize } from '../../../lib/styles/fontSize';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
    const lang = useSelector((state) => state.language.isKorean);
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
                                fontSize: 'sub_title',
                                fontWeight: 'primary',
                            }}
                            style={{ marginBottom: '30px', width: '60%' }}
                        >
                            {lang
                                ? '????????? ????????? ?????? ????????? ???????????????. \n ????????? ???????????????.'
                                : 'YOU are what you eat. \n Then what are you going to eat.'}
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
                            }}
                        >
                            {lang
                                ? '???????????? ???????????? ????????????????????? ?????? ?????? ??????????????? consumer tech??? digital health care ????????? ????????? ???????????????.'
                                : 'Start-up Team NUSEUM pursues crazy ideas for personaized nutirition to be apllied on Consumer Tech and Digital Health Care Industry'}
                        </Text>
                        <Text
                            fontStyle={{
                                whiteSpace: 'pre-line',
                                fontSize: 'normal',
                                fontWeight: 'normal',
                            }}
                            style={{ width: '60%' }}
                        >
                            {lang
                                ? 'NUSEUM??? ?????????, ?????????, ?????????, ?????????, ????????? ???????????? 18??? ?????? ????????? ???????????? ????????? ????????????  ???????????? ?????? ?????? ????????? ????????????, ???????????? ???????????? ????????? ????????? ????????? ??? ????????? ?????? ????????? ????????? ???????????? ??????????????????????????? ??????????????? ???????????? ????????????.'
                                : 'NUSEUM provides information to eat right and helps individuals to practice a healthy diet tailored to them based on the experience of the founder who has studied physiology, pharmacology, toxicology, food science, and nutrition for more than 18 years. NUSEUM is growing to provide innovative personalized nutrition management in this digital age.'}
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
                                fontSize: 'sub_title',
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
                            {lang
                                ? '???????????? ????????? ????????? ????????? ????????? ????????? ???, ???????????? ??? ??????????????? ????????? ????????? ????????????'
                                : 'NUSEUM helps individuals to choose what not to eat and what to eat for themselves and their significant others'}
                        </Text>
                    </SectionTextBox>
                </ImageBox>
                <ImageBox reverse={true} style={{ justifyContent: 'flex-end' }}>
                    <SectionTextBox>
                        <Text
                            fontStyle={{
                                fontSize: 'sub_title',
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
                            {lang
                                ? '???????????? e-commerce??? ???????????? ????????? ????????? ????????? ????????? ????????????????????? ?????? ??????????????? ????????????'
                                : 'NUSEUM connects e-commerce to help food choice right for you and your significant others'}
                        </Text>
                    </SectionTextBox>
                    <SectionImage src={section2} alt='section2' />
                </ImageBox>
                <ImageBox style={{ justifyContent: 'flex-start' }}>
                    <SectionImage src={section3} alt='section3' />
                    <SectionTextBox>
                        <Text
                            fontStyle={{
                                fontSize: 'sub_title',
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
                            {lang
                                ? '???????????? ???????????? ??? ????????? ???????????? ????????? ????????? ????????? ????????? ????????? ?????? ????????? ????????????'
                                : "NUSEUM connects food delivery, take out & dine-in cafe to help menu choice right for you and your significant others"}
                        </Text>
                    </SectionTextBox>
                </ImageBox>
                <ImageBox reverse={true} style={{ justifyContent: 'flex-end' }}>
                    <SectionTextBox>
                        <Text
                            fontStyle={{
                                fontSize: 'sub_title',
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
                            {lang
                                ? '???????????? ????????? ???????????? ?????? ?????????????????????????????? \n "?????? ??????"??? ???????????? ?????? ???????????? ????????????'
                                : 'NUSEUM is growing as a key player in food and nutrition in the digital healthcare industry'}
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
                            {lang
                                ? '???????????? ???????????????????????? ????????? ?????? ??????????????? ????????? ????????? ???????????? ?????? Autism Diet Digital Challenge??? ???????????? ????????????.'
                                : 'NUSEUM is conducting Autism Diet Digital Challenge powered by Amazon Web Service, developing innovative personalized nutrition solution for autistic children'}
                        </Text>
                    </ServiceDescriptionBox>
                </ServiceDescription>
                <img
                    src={gray_logo}
                    style={{
                        width: '90%',
                        maxWidth: '1190px',
                        display: 'block',
                        margin: '0 auto',
                        display: 'none',
                    }}
                    alt='gray_logo'
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
                        onClick={() => {
                            // navigate('/question')
                        }}
                        style={{ marginTop: 30, fontSize: fontSize.button }}
                    >
                        EXPLORE NUSEUM
                    </Button>
                </div>
            </Section>

            <InformationBox
                style={{
                    minHeight: 350,
                    position: 'relative',
                    background: '#FAF8F6',
                }}
            >
                <FooterTop>
                    <img src={footerLogo} alt='footer' height='80px' />
                    <ContactBox>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: 10,
                                width: 280,
                                maxWidth: '100%',
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
                </FooterTop>
                <FooterWrap>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            width: '100%',
                            float: 'left',
                        }}
                    >
                        <Text
                            fontStyle={{
                                fontWeight: 'normal',
                                fontSize: 'button',
                            }}
                        >
                            {lang
                                ? '08826) ??????????????? ????????? ????????? 1. ??????????????? ??????????????? IBK????????????????????????(64???) 1??? IBK?????? ??????????????? NUSEUM'
                                : '08826) NUSEUM IBK Changgong Seoul National University Camp, IBK Communication Center, 1 Gwanak-ro, Gwanak-gu, Seoul, Republic of Korea'}
                        </Text>
                    </div>
                    <Text
                        fontStyle={{
                            fontSize: 'button',
                            fontWeight: 'normal',
                        }}
                        style={{ width: '100%', marginTop: '4px' }}
                    >
                        ?? 2022 NUSEUM. All rights reserved.
                    </Text>
                </FooterWrap>
            </InformationBox>
        </Layout>
    );
};
export default Home;
