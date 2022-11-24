import styled from 'styled-components';
import Input from '../../atom/Input/Input';

export const Img = styled.img`
    object-fit: cover;
    width: 100%;
    height: 80%;
    object-position: -20rem 0;
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const GenderButton = styled(Input)`
    &:hover {
        opacity: 0.6;
    }
    &:active {
        opacity: 0.4;
    }
`;
