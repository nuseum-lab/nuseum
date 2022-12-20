import Header from '../../organism/Header/Header';
import Layout from '../Layout';
import { HistoryTextBox, HistoryWrap, YearWrap, Year, HistoryText} from './History.styled';
import { FooterWrap } from '../../atom/Footer/Footer';
import Text from '../../atom/Text/Text';
import {InformationBox,ContactBox,FooterTop} from '../Home/Home.styled';
import footerLogo from '../../../lib/assets/footer-logo.png';
import { useSelector } from 'react-redux';

const History = () => {
    const lang = useSelector((state) => state.language.isKorean);
    return(
    <Layout>
        <Header />
        <HistoryWrap>
            <h1>
                HISTORY
            </h1>
            <Text>NUSEUM</Text>
            <HistoryTextBox>
                <YearWrap
                    style={{borderBottom: '2px dotted rgba(0 0 0 / 20%'}}
                >
                    <Year>2022</Year>
                    <HistoryText style={{ marginBottom: '50px'}}>
                        <div>
                            <h4>04.30 ~ 06.11</h4>
                            <Text>{lang ? '- TEU-MED 2기 참여' : '- Participation in the 2nd TEU-MED'}</Text>
                            <Text>{lang ? '- Innovation Day “자폐아동 대상 개인맞춤영양 플랫폼” 대상 수상':'- "Personalized nutrition platform for autistic children" won the grand prize at Innovation Day'}</Text>
                        </div>
                        <div>
                            <h4>05.13 ~ 12.31</h4>
                            <Text>{lang ? '- 서울대학교 창업지원단 [창업클럽] 선정':"- Selected as the Startup Club of Seoul National University's Startup Support Group"}</Text>
                            <Text>{lang ? '- 서울대학교 창업지원단 창업클럽 교내경진대회 최우수상 수상 (2022.06.15)':'- Won the grand prize at the school competition hosted by the Seoul National University Startup Support Group Startup Club (2022.06.15)'}</Text>
                        </div>
                        <div>
                            <h4>05.16</h4>
                            <Text>{lang ? 'IBK창공':'IBK changgong'}</Text>
                            <Text>{lang ? '- 서울대학교 관악캠퍼스 IBK커뮤니케이션센터 1층 IBK창공 서울대캠프 입주':'- Seoul National University Gwanak Campus IBK Communication Center 1st floor IBK Changgong Seoul National University Camp'}</Text>
                        </div>
                        <div>
                            <h4>07.01 ~ 23.11.30</h4>
                            <Text>{lang ? 'NIA 인공지능 학습용 데이터 구축 지원사업':'NIA Data Construction Support Project for Artificial Intelligence'}</Text>
                            <Text>{lang ? '- 과학기술정보통신부, NIA 한국지능정보사회진흥원 2022 인공지능 학습용 데이터 구축 지원사업 - 데이터활용환류분야에 (주)채널바이옴 "당뇨관리 앱을 통한 음식 이미지 활용 및 환류" 사업 참여기업으로 선정':'- Ministry of Science and ICT, NIA Korea Intelligence Information Society Promotion Agency 2022 AI Learning Data Construction Support Project > In the field of data utilization and reflux, NUSEUM was selected as a participating company in Channel Biome Co., Ltd.s "Use and reflux of food images through diabetes management apps" project'}</Text>
                        </div>
                        <div>
                            <h4>09.01 ~ 11.30</h4>
                            <Text>{lang ? '자폐스펙트럼장애 아동 개인맞춤영양 임상연구':'A Clinical Study on Personalized Nutrition for Children with Autism Spectrum Disorder'}</Text>
                            <Text>{lang ? '- 식품의약품안전처 “영양취약계층(자폐스펙트럼장애 아동) 맞춤형 영양관리 및 정보제공”을 위한 임상연구 수행':'- Clinical research conducted by the Ministry of Food and Drug Safety to "customized nutrition management and information provision for the nutritionally vulnerable class (children with autism spectrum disorder)"'}</Text>
                        </div>
                        <div>
                            <h4>09.17</h4>
                            <Text>{lang ? '부산 CIC': 'Busan CIC' }</Text>
                            <Text>powered by AWS</Text>
                            <Text>{lang ? '- 부산 클라우드혁신센터 powered by AWS 멤버기업으로 참여':'- Participate as a member of the Busan Cloud Innovation Center powered by AWS'}</Text>
                        </div>
                        <div>
                            <h4>09.21</h4>
                            <Text>SNU Venture Builder</Text>
                            <Text>{lang ?'- 서울대학교 시흥캠퍼스 주관 SNU Venture Builder 프로그램 선정':'- Selected SNU Venture Builder program organized by Siheung Campus of Seoul National University'}</Text>
                        </div>
                        <div style={{paddingBottom: '20px'}}>
                            <h4>11.01</h4>
                            <Text>{lang ? '㈜디보션푸드와 MOU' : 'Devotion Food Co., Ltd. and MOU'}</Text>
                            <Text>{lang ? '- 식물성대체육 기업 ㈜디보션푸드와 MOU 체결' : '- MOU signed with Devotion Food Co., Ltd., a vegetable alternative meat company'}</Text>
                        </div>
                    </HistoryText>
                </YearWrap>
                <YearWrap style={{ marginTop: '50px'}}>
                    <Year>2023 </Year>
                    <HistoryText>
                        <div style={{paddingBottom: '20px'}}>
                            <h4>01.05 ~ 01.08</h4>
                            <Text>{lang ? '2023 CES Eureka Park SNU관':'2023 CES Eureka Park SNU Exhibition Hall'}</Text>
                            <Text>{lang ? '- NUSEUM의 개인맞춤식이설계 플랫폼 2023 CES Eureka Park SNU관 포스터 전시 ':"- NUSEUM's personalized design platform 2023 CES Eureka Park SNU Hall poster exhibition"}</Text>
                        </div>
                    </HistoryText>
                </YearWrap>
            </HistoryTextBox>
        </HistoryWrap>


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
                                maxWidth: '100%'
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
                                {/* 08826) 서울특별시 관악구 관악로 1. 서울대학교
                                관악캠퍼스 IBK커뮤니케이션센터(64동) 1층 IBK창공
                                서울대캠프 NUSEUM */}
                                08826) NUSEUM IBK Changgong Seoul National
                                University Camp, IBK Communication Center, 1
                                Gwanak-ro, Gwanak-gu, Seoul, Republic of Korea
                            </Text>
                        </div>
                        <Text
                            fontStyle={{
                                fontSize: 'button',
                                fontWeight: 'normal',
                            }}
                            style={{ width: '100%', marginTop: '4px' }}
                        >
                            © 2022 NUSEUM. All rights reserved.
                        </Text>
                </FooterWrap>
            </InformationBox>
    </Layout>
    )
};

export default History;