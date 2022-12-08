import styled from 'styled-components';
import { colorPalette } from '../../../lib/styles/colorPalette';
import { GenderButton } from '../Question/Question.styled';

export const SelectButton = styled(GenderButton)`
    width: 30%;
    cursor: pointer;
    background-color: ${(props) =>
        props.selected ? colorPalette.lightPink : 'white'};
`;
export const SelectButtonWrapper = styled.div`
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    @media all and (max-width: 768px) {
        width: 80%;
    }
`;

export const SearchBar = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media all and (max-width: 768px) {
        width: 100%;
    }
`;
export const Background = styled.div`
    width: 100vw;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;

    @media all and (max-width: 599px) {
        display: none;
    }
`;
export const SearchResultBox = styled.div`
    width: 30%;
    height: 40%;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: absolute;
    background-color: white;
    z-index: 10001;
    overflow: scroll;
    top: 25%;
    left: 35%;
    padding: 20px;
    border-radius: 10px;
    @media all and (max-width: 599px) {
        height: 20rem;
    }
`;
