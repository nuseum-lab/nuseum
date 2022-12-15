import Header from '../../organism/Header/Header';
import Layout from '../Layout';
import { HistoryTextBox, HistoryWrap, YearWrap, Year, HistoryText} from './History.styled';
import { FooterWrap } from '../../atom/Footer/Footer';
import Text from '../../atom/Text/Text';
import {InformationBox,ContactBox,FooterTop} from '../Home/Home.styled';
import footerLogo from '../../../lib/assets/footer-logo.png';

const History = () => {
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
                    style={{borderBottom: '1px solid rgba(0 0 0 / 25%'}}
                >
                    <Year>2022</Year>
                    <HistoryText style={{ marginBottom: '50px'}}>
                        <div>
                            <h4>04.30 ~ 06.11</h4>
                            <Text>- TEU-MED 2기 참여</Text>
                            <Text>- Innovation Day “자폐아동 대상 개인맞춤영양 플랫폼” 대상 수상</Text>
                        </div>
                        <div>
                            <h4>05.13 ~ 12.31</h4>
                            <Text>- 서울대학교 창업지원단 [창업클럽] 선정</Text>
                            <Text>- 서울대학교 창업지원단 창업클럽 교내경진대회 최우수상 수상 (2022.06.15)</Text>
                        </div>
                        <div>
                            <h4>05.16</h4>
                            <Text>IBK창공</Text>
                            <Text>- 서울대학교 관악캠퍼스 IBK커뮤니케이션센터 1층 IBK창공 서울대캠프 입주</Text>
                        </div>
                        <div>
                            <h4>07.01 ~ 23.11.30</h4>
                            <Text>NIA 인공지능 학습용 데이터 구축 지원사업</Text>
                            <Text>- 과학기술정보통신부, NIA 한국지능정보사회진흥원 2022 인공지능 학습용 데이터 구축 지원사업 - 데이터활용환류분야에 (주)채널바이옴 "당뇨관리 앱을 통한 음식 이미지 활용 및 환류" 사업 참여기업으로 선정</Text>
                        </div>
                        <div>
                            <h4>09.01 ~ 11.30</h4>
                            <Text>자폐스펙트럼장애 아동 개인맞춤영양 임상연구</Text>
                            <Text>- 식품의약품안전처 “영양취약계층(자폐스펙트럼장애 아동) 맞춤형 영양관리 및 정보제공”을 위한 임상연구 수행</Text>
                        </div>
                        <div>
                            <h4>09.17</h4>
                            <Text>부산 CIC</Text>
                            <Text>powered by AWS</Text>
                            <Text>- 부산 클라우드혁신센터 powered by AWS 멤버기업으로 참여</Text>
                        </div>
                        <div>
                            <h4>09.21</h4>
                            <Text>SNU Venture Builder</Text>
                            <Text>- 서울대학교 시흥캠퍼스 주관 SNU Venture Builder 프로그램 선정</Text>
                        </div>
                        <div style={{paddingBottom: '20px'}}>
                            <h4>11.01</h4>
                            <Text>㈜디보션푸드와 MOU</Text>
                            <Text>- 식물성대체육 기업 ㈜디보션푸드와 MOU 체결</Text>
                        </div>
                    </HistoryText>
                </YearWrap>
                <YearWrap style={{ marginTop: '50px'}}>
                    <Year>2023 </Year>
                    <HistoryText>
                        <div style={{paddingBottom: '20px'}}>
                            <h4>01.05 ~ 01.08</h4>
                            <Text>2023 CES Eureka Park SNU관</Text>
                            <Text>- NUSEUM의 개인맞춤식이설계 플랫폼 2023 CES Eureka Park SNU관 포스터 전시 </Text>
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