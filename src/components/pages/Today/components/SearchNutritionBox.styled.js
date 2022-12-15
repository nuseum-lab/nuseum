import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ResultBox = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #0000000f;
    padding: 10px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
`;

export const Result = styled(motion.p)`
    width: 100%;
    font-size: 12px;
    text-align: left;
    display: flex;
    flex-direction: column;
    line-height: 16px;
    border-radius: 10px;
    margin-bottom: 5px;
`;
export const Divider = styled(motion.hr)`
    width: 100%;
`;

export const InputAmountBox = styled.div`
    width: 90px;
    position: relative;
    right: -80px;
`;
export const InputAmount = styled.input`
    height: 30px;
    color: #7f8c8d;
    width: 130px;
    padding: 0 10px;
    &:focus {
        outline: none;
    }
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    border: none;
    border-bottom: 1px solid #9a9a9a;
`;
export const Adornment = styled.span`
    color: #7f8c8d;
    position: absolute;
    right: -30px;
    bottom: 25%;
    font-size: 12px;
`;
