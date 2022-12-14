import axios from 'axios';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import background from '../../../lib/assets/question-background.png';
import search from '../../../lib/assets/search.png';
import BasicModal from '../../atom/BasicModal/BasicModal';
import Button from '../../atom/Button';
import Input from '../../atom/Input/Input';
import Text from '../../atom/Text/Text';
import Header from '../../organism/Header/Header';
import Layout from '../Layout';
import {
    BackgroundImg,
    BackgroundWrapper,
    Img,
    ImgWrapper,
    TextWrapper,
    UtilLayout,
    UtilWrapper,
} from '../Question/Question.styled';

import SearchResultBoxWrapper from './components/SearchResultBoxWrapper';
import {
    Background,
    SearchBar,
    SelectButton,
    SelectButtonWrapper,
} from './Today.styled';

const Today = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [result, setResult] = useState([]);
    const [openId, setOpenId] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [inputModalOpen, setInputModalOpen] = useState(false);
    const [inputTitle, setInputTitle] = useState('');

    const [inputCompletedFood, setInputCompletedFood] = useState(null);

    // 입력된 음식목록 -> 이미지 위에 올라가는 리스트에 사용됨
    const [selected, setSelected] = useState({
        breakfast: true,
        lunch: false,
        dinner: false,
        snack: false,
        supplement: false,
    });

    const [food, setFood] = useState('');
    const [foodList, setFoodList] = useState({
        breakfast: [],
        lunch: [],
        dinner: [],
        snack: [],
        supplement: [],
    });
    const [hasSecond, setHasSecond] = useState(false);

    return (
        <Layout style={{ width: '100%', padding: 0 }}>
            <Header />
            <BasicModal
                setOpen={setInputModalOpen}
                open={inputModalOpen}
                inputTitle={inputTitle}
                setFoodList={setFoodList}
                selected={selected}
                inputCompletedFood={inputCompletedFood}
            />
            <BackgroundWrapper reverse={true}>
                <ImgWrapper
                    style={{
                        alignItems: 'center',
                    }}
                >
                    <UtilLayout
                        style={{
                            height: '70%',
                            overflowY: 'scroll',
                        }}
                    >
                        <TextWrapper style={{ width: '80%' }}>
                            {Object.keys(foodList).map((item) =>
                                foodList[item].length > 0 ? (
                                    <>
                                        <Text
                                            key={item}
                                            style={{
                                                paddingLeft: 5,
                                                margin: '20px 0',
                                                width: '80%',
                                                textAlign: 'left',
                                                color: 'white',
                                                borderBottom: '2px solid white',
                                                lineHeight: 1.5,
                                                fontSize: 32,
                                                fontWeight: 600,
                                            }}
                                        >
                                            {item === 'breakfast'
                                                ? '아침'
                                                : item === 'lunch'
                                                ? '점심'
                                                : item === 'dinner'
                                                ? '저녁'
                                                : item === 'snack'
                                                ? '간식'
                                                : item === 'supplement'
                                                ? '영양제'
                                                : null}
                                        </Text>
                                        {foodList[item].map((meal, index) => (
                                            <Text
                                                key={index + item}
                                                style={{
                                                    paddingLeft: 5,
                                                    marginBottom: '12px',
                                                    width: '80%',
                                                    textAlign: 'left',
                                                    color: 'white',
                                                    borderBottom:
                                                        '0.5px solid white',
                                                    lineHeight: 1.5,
                                                    fontSize: 24,
                                                    fontWeight: 400,
                                                }}
                                            >
                                                {meal[0]} / {meal[1]}g 또는 ml
                                            </Text>
                                        ))}
                                    </>
                                ) : null
                            )}
                        </TextWrapper>
                    </UtilLayout>

                    <BackgroundImg src={background} alt='background' />
                </ImgWrapper>

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
                                TODAY
                            </Text>
                            <Text
                                fontStyle={{
                                    fontWeight: 'normal',
                                    fontSize: 'normal',
                                }}
                            >
                                오늘 먹은 음식을 입력해주세요 :)
                            </Text>
                        </TextWrapper>

                        <SelectButtonWrapper style={{ marginBottom: 30 }}>
                            <SelectButton
                                selected={selected.breakfast}
                                onClick={() =>
                                    setSelected({
                                        breakfast: true,
                                        lunch: false,
                                        dinner: false,
                                        snack: false,
                                        supplement: false,
                                    })
                                }
                                as='button'
                            >
                                아침
                            </SelectButton>
                            <SelectButton
                                selected={selected.lunch}
                                onClick={() =>
                                    setSelected({
                                        breakfast: false,
                                        lunch: true,
                                        dinner: false,
                                        snack: false,
                                        supplement: false,
                                    })
                                }
                                as='button'
                            >
                                점심
                            </SelectButton>
                            <SelectButton
                                selected={selected.dinner}
                                onClick={() =>
                                    setSelected({
                                        breakfast: false,
                                        lunch: false,
                                        dinner: true,
                                        snack: false,
                                        supplement: false,
                                    })
                                }
                                as='button'
                            >
                                저녁
                            </SelectButton>
                            <SelectButton
                                selected={selected.snack}
                                onClick={() =>
                                    setSelected({
                                        breakfast: false,
                                        lunch: false,
                                        dinner: false,
                                        snack: true,
                                        supplement: false,
                                    })
                                }
                                as='button'
                            >
                                간식
                            </SelectButton>
                            <SelectButton
                                selected={selected.supplement}
                                onClick={() =>
                                    setSelected({
                                        breakfast: false,
                                        lunch: false,
                                        dinner: false,
                                        snack: false,
                                        supplement: true,
                                    })
                                }
                                as='button'
                            >
                                영양제
                            </SelectButton>
                        </SelectButtonWrapper>

                        <Text
                            fontStyle={{
                                fontWeight: 'normal',
                                fontSize: 'normal',
                            }}
                            style={{ marginBottom: 20 }}
                        >
                            찾고 싶은 음식을 검색해주세요.
                        </Text>
                        <SearchBar>
                            <Input
                                style={{
                                    width: '80%',
                                    textAlign: 'left',
                                    paddingLeft: 30,
                                    paddingRight: 50,
                                    marginBottom: 0,
                                }}
                                onChange={(e) => {
                                    setFood(e.target.value);
                                }}
                                onKeyPress={(e) => {
                                    if (e.target.value === '') {
                                        return;
                                    }

                                    if (e.key === 'Enter') {
                                        axios
                                            .get(`/food/?search=${food}`)
                                            .then((response) => {
                                                if (response.data.count === 0) {
                                                    window.alert(
                                                        '검색결과가 없습니다.'
                                                    );
                                                    return;
                                                }

                                                setModalOpen(true);
                                                setResult([
                                                    ...response.data.results,
                                                ]);
                                                if (response.data.next) {
                                                    setHasSecond(true);
                                                }
                                            })
                                            .catch((err) => console.log(err));
                                    }
                                }}
                            />
                            <Img
                                src={search}
                                style={{
                                    width: 20,
                                    height: 20,
                                    position: 'relative',
                                    right: 40,
                                    cursor: 'pointer',
                                }}
                                onClick={() => {
                                    axios
                                        .get(`/food/?search=${food}`)
                                        .then((response) => {
                                            if (response.data.count === 0) {
                                                window.alert(
                                                    '검색결과가 없습니다.'
                                                );
                                                return;
                                            }

                                            setModalOpen(true);
                                            setResult([
                                                ...response.data.results,
                                            ]);
                                            if (response.data.next) {
                                                setHasSecond(true);
                                            }
                                        })
                                        .catch((err) => console.log(err));
                                }}
                            />
                        </SearchBar>
                        <Button
                            style={{
                                bottom: 'auto',
                                fontSize: 'button',
                                color: 'white',
                                position: 'relative',
                                top: 30,
                                cursor: 'pointer',
                            }}
                            bgColor='#5D4E44'
                            onClick={() =>
                                navigate('/analysis', {
                                    state: {
                                        gender: location.state.gender,
                                        age: location.state.age,
                                        foodList,
                                    },
                                })
                            }
                        >
                            분석하기
                        </Button>
                        {modalOpen && !inputModalOpen ? (
                            <Background></Background>
                        ) : null}
                        {modalOpen && !inputModalOpen ? (
                            <SearchResultBoxWrapper
                                setModalOpen={setModalOpen}
                                result={result}
                                setOpenId={setOpenId}
                                openId={openId}
                                setInputModalOpen={setInputModalOpen}
                                setInputTitle={setInputTitle}
                                hasSecond={hasSecond}
                                searchParam={food}
                                setInputCompletedFood={setInputCompletedFood}
                            />
                        ) : null}
                    </UtilLayout>
                </UtilWrapper>
            </BackgroundWrapper>
        </Layout>
    );
};
export default Today;
