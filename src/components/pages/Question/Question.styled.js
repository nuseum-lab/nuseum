import styled from 'styled-components';
import { colorPalette } from '../../../lib/styles/colorPalette';
import Input from '../../atom/Input/Input';

export const Img = styled.img`
    object-fit: cover;
    width: 100%;
    height: 80%;
    object-position: 70% 0;

    @media all and (max-width: 1135px) and (min-width: 600px) {
        object-position: 70% 0;
    }
    @media all and (max-width: 768px) {
        width: 100%;
    }
`;
export const BackgroundImg = styled.img`
    display: block;
    box-sizing: border-box;
    object-fit: cover;
    width: 50%;
    height: 100%;
    z-index: -1;
    position: absolute;
    @media all and (max-width: 768px) {
        width: 100%;
        height: 50%;
    }
`;
export const UtilWrapper = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media all and (max-width: 768px) {
        width: 100%;
        height: auto;
    }
`;
export const UtilLayout = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media all and (max-width: 768px) {
        height: auto;
        padding: 50px 0;
    }
    input {
        width: 50%;
        margin-bottom: 12px;
        @media all and (max-width: 599px) {
            width: 70%;
        }
    }
    div {
        @media all and (max-width: 599px) {
            width: 70% !important;
        }
    }
`;

export const ImgWrapper = styled.div`
    width: 50%;
    height: 100%;
    overflow: hidden;
    display: flex;
    align-items: flex-end;

    @media all and (max-width: 768px) {
        width: 100%;
        height: auto;
    }
`;

export const BackgroundWrapper = styled.div`
    box-sizing: border-box;
    height: 100vh;
    width: 100%;
    display: flex;
    @media all and (max-width: 768px) {
        flex-direction: column-reverse;
        height: auto;
    }
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 60px;
    @media all and (max-width: 768px) {
        margin-bottom: 30px;
    }
`;

export const GenderButton = styled(Input)`
    width: 48%;
    color: black;
    margin-bottom: 30px;
    cursor: pointer;
    background-color: ${(props) =>
        props.gender ? colorPalette.lightPink : 'white'};
    &:hover {
        opacity: 1;
        background-color: ${colorPalette.lightPink} !important;
    }
    &:active {
        opacity: 1;
        background-color: ${colorPalette.lightPink} !important;
    }
`;
