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
`;
export const SearchResultBox = styled.div`
    width: 40vw;
    height: auto;
    min-height: 20vh;
    max-height: 50vh;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    position: absolute;
    background-color: white;
    z-index: 10001;
    overflow-y: scroll;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 3%;
    border-radius: 10px;
    @media all and (max-width: 1200px) {
        width: 60vw;
        padding-left: 5vw;
    }
    @media all and (max-width: 768px) {
        width: 80vw;
        max-height: 80vh;
        padding-left: 6vw;
    }
    ::-webkit-scrollbar {
        display: none;
    }
`;
