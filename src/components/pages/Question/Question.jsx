import Layout from '../Layout';
import background from '../../../lib/assets/background.png';
import woman from '../../../lib/assets/woman.png';
import Header from '../../organism/Header/Header';
import {
    BackgroundImg,
    BackgroundWrapper,
    GenderButton,
    GenderButtonWrapper,
    Img,
    ImgWrapper,
    TextWrapper,
    UtilLayout,
    UtilWrapper,
} from './Question.styled';
import Text from '../../atom/Text/Text';
import Input from '../../atom/Input/Input';
import { useEffect, useState } from 'react';
import Button from '../../atom/Button';
import { useNavigate } from 'react-router-dom';

const Question = () => {
    useEffect(() => {
        window.scroll(0, 0);
    }, []);
    const [gender, setGender] = useState(undefined);
    const [age, setAge] = useState(0);
    const navigate = useNavigate();
    return (
        <Layout style={{ width: '100%', padding: 0 }}>
            <Header />
            <BackgroundWrapper>
                <UtilWrapper>
                    <UtilLayout>
                        <TextWrapper>
                            <Text
                                fontStyle={{
                                    fontWeight: 'primary',
                                    fontSize: 'sub_title',
                                }}
                                style={{ marginBottom: '12px' }}
                            >
                                QUESTION
                            </Text>
                            <Text
                                fontStyle={{
                                    fontWeight: 'normal',
                                    fontSize: 'normal',
                                }}
                            >
                                나이와 성별을 입력해주세요 :)
                            </Text>
                        </TextWrapper>
                        <Text
                            fontStyle={{
                                fontSize: 'normal',
                                fontWeight: 'normal',
                            }}
                            style={{ marginBottom: 40 }}
                        >
                            What's your age?
                        </Text>
                        <Input
                            placeholder=''
                            onChange={(e) => setAge(e.target.value)}
                        />
                        <GenderButtonWrapper>
                            <GenderButton
                                as='button'
                                gender={gender}
                                onClick={() => setGender(true)}
                            >
                                man
                            </GenderButton>
                            <GenderButton
                                as='button'
                                gender={
                                    gender === undefined ? undefined : !gender
                                }
                                onClick={() => setGender(false)}
                            >
                                woman
                            </GenderButton>
                        </GenderButtonWrapper>
                        <Button
                            style={{
                                bottom: 'auto',
                                fontSize: 'button',
                                color: 'white',
                                position: 'relative',
                                marginTop: '50px',
                                cursor: 'pointer',

                            }}
                            onClick={() =>
                                navigate('/today', {
                                    state: {
                                        age,
                                        gender,
                                    },
                                })
                            }
                            bgColor='#5D4E44'
                        >
                            NEXT
                        </Button>
                    </UtilLayout>
                </UtilWrapper>
                <ImgWrapper>
                    <BackgroundImg src={background} alt='background' />

                    <Img src={woman} alt='' />
                </ImgWrapper>
            </BackgroundWrapper>
        </Layout>
    );
};

export default Question;
