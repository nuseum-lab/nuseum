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
                            <h4>01.01 ~ 12.31</h4>
                            <Text>{lang ? '- 과학기술정보통신부 한국연구재단 중견연구자원사업 "뇌건강 foodme-physiome-exposome 지식을 기반으로 하는 개인 맞춤 브레인 푸드 머신러닝 예측 모델 개발 연구' : "- The Ministry of Science and ICT's support project for the Korea Research Foundation's Mid-sized Research Institute 'Development of a predictive model for customized brain food machine learning based on brain health foodme-physiome-exposome knowledge'"}</Text>
                        </div>
                        <div>
                            <h4>01.01 ~ 12.31</h4>
                            <Text>{lang ? '- 아마존 웹서비스 의료 혁신과제 자폐 영유아동의 디지털 식이개선 챌린지 참여':'- Participate in the Amazon Web Service Medical Innovation Task Digital Diet Improvement Challenge for Autistic Infants and Children'}</Text>
                        </div>
                        <div>
                            <h4>03.29 ~ 12.16</h4>
                            <Text>{lang ? '- 식품의약품안전처 “영양취약계층(자폐스펙트럼장애 아동) 맞춤형 영양관리 및 정보제공” 연구' : '- A study by the Ministry of Food and Drug Safety on "customized nutrition management and information provision for the vulnerable (child with autism spectrum disorder)"'}</Text>
                        </div>
                        <div>
                            <h4>04.30 ~ 06.11</h4>
                            <Text>{lang ? '- TEU-MED 의료 혁신가 양성 프로그램 2기 선정' : '- Selected as the second TEU-MED medical innovator training program'}</Text>
                            <Text>{lang ? '- Innovation Day “자폐아동 대상 개인맞춤영양 플랫폼” 대상 수상(2022.06.11)':'- "Personalized nutrition platform for autistic children" won the grand prize at Innovation Day (2022.06.11)'}</Text>
                        </div>
                        <div>
                            <h4>05.13 ~ 12.31</h4>
                            <Text>{lang ? '- 서울대학교 창업지원단 "창업클럽" 선정':"- Selected as the Startup Club of Seoul National University's Startup Support Group"}</Text>
                            <Text>{lang ? '- 서울대학교 창업지원단 창업클럽 교내경진대회 최우수상 수상 (2022.06.15)':'- Won the grand prize at the school competition hosted by the Seoul National University Startup Support Group Startup Club (2022.06.15)'}</Text>
                        </div>
                        <div>
                            <h4>05.16</h4>
                            <Text>{lang ? '- 서울대학교 관악캠퍼스 IBK커뮤니케이션센터 1층 IBK창공 서울대캠프 입주':'- Seoul National University Gwanak Campus IBK Communication Center 1st floor IBK Changgong Seoul National University Camp'}</Text>
                        </div>
                        <div>
                            <h4>06.01 ~ 12.31</h4>
                            <Text>{lang ? '- SNU 해동주니어스타트업 프로그램 선정' : '- Selected as SNU Haedong Junior Startup Program'}</Text>
                        </div>
                        <div>
                            <h4>07.01 ~ 12.31</h4>
                            <Text>{lang ? '- 과학기술정보통신부, NIA 한국지능정보사회진흥원. 2022 인공지능 학습용 데이터 구축 지원사업 - 데이터활용환류분야 "당뇨관리 앱을 통한 음식 이미지 활용 및 환류" 참여':'- Ministry of Science and ICT, NIA Korea Intelligence and Information Society Agency. 2022 AI Learning Data Construction Support Project - Participation in "Data Utilization and Reflux of Food Images through Diabetes Management App"'}</Text>
                        </div>
                        <div>
                            <h4>09.30 ~ 12.31</h4>
                            <Text>{lang ?'- 서울대학교 시흥캠퍼스 주관 SNU Venture Builder 프로그램 선정':'- Selected SNU Venture Builder program organized by Siheung Campus of Seoul National University'}</Text>
                        </div>
                        <div>
                            <h4>11.01</h4>
                            <Text>{lang ? '- 식물성대체육 기업 ㈜디보션푸드와 MOU 체결' : '- MOU signed with Devotion Food Co., Ltd., a vegetable alternative meat company'}</Text>
                        </div>
                        <div style={{paddingBottom: '20px'}}>
                            <h4>12.12 ~ 12.31</h4>
                            <Text>{lang ? '- 부산 클라우드혁신센터 powered by 아마존웹서비스 멤버십 선정':'- Selected as "Busan Cloud Innovation Center powered by Amazon Web Service Membership"'}</Text>
                        </div>
                    </HistoryText>
                </YearWrap>
                <YearWrap style={{ marginTop: '50px'}}>
                    <Year>2023 </Year>
                    <HistoryText>
                        <div>
                            <h4>01.01 ~ 01.12</h4>
                            <Text>{lang ? '- 서울대학교 시흥캠퍼스 주관 SNU Venture Builder 프로그램 참여':'- Participate in the SNU Venture Builder Program hosted by Seoul National University Siheung Campus'}</Text>
                        </div>
                        <div>
                            <h4>01.01 ~ 02.28</h4>
                            <Text>{lang ? '- 과학기술정보통신부 한국연구재단 중견연구자지원사업 "뇌건강 foodome-physiome-exposome 지식을 기반으로 하는 개인 맞춤 브레인 푸드 머신러닝 예측 모델 개발" 연구':"- The Ministry of Science and ICT's Korea Research Foundation's mid-sized researcher support project 'Development of a personalized brain food machine learning prediction model based on brain health foodome-physome-exposome knowledge'"}</Text>
                        </div>
                        <div>
                            <h4>01.01 ~ 05.31</h4>
                            <Text>{lang ? '- SNU 해동주니어스타트업 프로그램 참여':'- Participate in SNU Haedong Junior Startup Program'}</Text>
                        </div>
                        <div>
                            <h4>01.01 ~ 11.30</h4>
                            <Text>{lang ? '- 과학기술정보통신부, NIA 한국지능정보사회진흥원. 2023 인공지능 학습용 데이터 구축 지원사업 - 데이터활용환류분야 "당뇨관리 앱을 통한 음식 이미지 활용 및 환류" 참여':'- Ministry of Science and ICT, NIA Korea Intelligence and Information Society Agency. 2023 AI Learning Data Construction Support Project - Participation in "Data Utilization and Reflux of Food Images through Diabetes Management App"'}</Text>
                        </div>
                        <div>
                            <h4>01.01 ~ 11.30</h4>
                            <Text>{lang ? '- 아마존 웹서비스 의료 혁신과제 자폐 영유아동의 디지털 식이개선 챌린지 참여':'- Participate in the Amazon Web Service Medical Innovation Task Digital Diet Improvement Challenge for Autistic Infants and Children'}</Text>
                            <Text>{lang ? '- 부산 클라우드혁신센터 powered by 아마존웹서비스 멤버십 참여' : 'Participation in Busan Cloud Innovation Center powered by Amazon Web Service Membership' }</Text>
                        </div>
                        <div style={{paddingBottom: '20px'}}>
                            <h4>01.05 ~ 01.08</h4>
                            <Text>{lang ? '- 2023 CES Eureka Park SNU관. NUSEUM의 개인맞춤식이설계 플랫폼 전시' : "- 2023 CES Eureka Park SNU Exhibition Hall exhibits NUSEUM's personalized design platform"}</Text>
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