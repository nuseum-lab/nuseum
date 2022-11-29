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
`;