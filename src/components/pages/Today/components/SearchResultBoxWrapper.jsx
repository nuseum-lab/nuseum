import { CircularProgress } from '@mui/material';
import axios from 'axios';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Text from '../../../atom/Text/Text';
import { SearchResultBox } from '../Today.styled';
import SearchNutritionBox from './SearchNutritionBox';

let init = true;

const SearchResultBoxWrapper = ({
    setModalOpen,
    result,
    setOpenId,
    openId,
    setInputModalOpen,
    setInputTitle,
    hasSecond,
    searchParam,
    setInputCompletedFood,
}) => {
    const [isFetching, setIsFetching] = useState(false);
    const [page, setPage] = useState(3);
    const [hasNextPage, setHasNextPage] = useState(true);
    const [newResult, setNewResult] = useState([...result]);
    const ref = useRef();

    const [currentScroll, setCurrentScroll] = useState(0);

    useEffect(() => {
        let refValue = null;

        if (ref.current) {
            refValue = ref.current;
        }

        const handleScroll = () => {
            if (
                ref.current.clientHeight + currentScroll >=
                ref.current.scrollHeight - 400
            ) {
                setIsFetching(true);
            }
        };
        const addEventIdentifier = setTimeout(() => {
            ref.current.addEventListener('scroll', handleScroll);
            ref.current.attached = true;

            refValue.addEventListener('scroll', handleScroll);
            refValue.attached = true;
        }, 100);

        return () => {
            clearTimeout(addEventIdentifier);
            if (refValue.attached) {
                refValue.removeEventListener('scroll', handleScroll);
            }
        };
    }, [currentScroll]);

    const fetchFoods = useCallback(async () => {
        if (searchParam === '') {
            setIsFetching(false);
            return;
        }
        try {
            const response = await axios.get(
                `/food/?page=${page}&search=${searchParam}`
            );
            setNewResult((prev) => [...prev, ...response.data.results]);
            setPage((prev) => prev + 1);
            setHasNextPage(response.data.next ? true : false);
            setIsFetching(false);
        } catch (err) {
            console.log(err);
            if (err.response.status === 404) {
                setIsFetching(false);

                return;
            }
        }
    }, [page, searchParam]);

    useEffect(() => {
        if (init) {
            if (isFetching && hasSecond) fetchFoods(); // nextPage가 null이면
            else if (!hasSecond) setIsFetching(false); // 요청을 취소
            init = false;
        } else {
            if (isFetching && hasNextPage) fetchFoods(); // nextPage가 null이면
            else if (!hasNextPage) setIsFetching(false); // 요청을 취소
        }
    }, [isFetching, hasNextPage, hasSecond, fetchFoods]);

    return (
        <SearchResultBox
            ref={ref}
            onScroll={(e) => {
                setCurrentScroll(e.target.scrollTop);
            }}
        >
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'flex-end',
                }}
            >
                <span
                    style={{
                        left: 0,
                        cursor: 'pointer',
                    }}
                    onClick={() => setModalOpen(false)}
                    className='material-symbols-outlined'
                >
                    close
                </span>
            </div>

            {newResult.map((item) => (
                <React.Fragment key={item.id}>
                    <Text
                        style={{
                            textAlign: 'left',
                            width: '100%',
                            lineHeight: 1.5,
                            borderBottom: '1px solid rgba(0,0,0,0.2) ',
                            margin: '20px 0 0',
                            cursor: 'pointer',
                            padding: '10px 0',
                        }}
                        key={item.id}
                        onClick={() => {
                            setOpenId(item.id);
                        }}
                    >
                        {item.name}
                    </Text>
                    <SearchNutritionBox
                        openid={openId}
                        item={item}
                        setInputModalOpen={setInputModalOpen}
                        setInputTitle={setInputTitle}
                        setInputCompletedFood={setInputCompletedFood}
                    />
                </React.Fragment>
            ))}
            {isFetching ? (
                <CircularProgress
                    sx={{ display: 'block', margin: '30px auto' }}
                />
            ) : null}
        </SearchResultBox>
    );
};

export default SearchResultBoxWrapper;
