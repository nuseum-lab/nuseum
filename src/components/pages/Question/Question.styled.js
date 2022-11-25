import styled from 'styled-components';
import Input from '../../atom/Input/Input';

export const Img = styled.img`
    object-fit: cover;
    width: 100%;
    height: 80%;
    object-position: 70% 0;

    @media all and (max-width: 1135px) and (min-width: 600px) {
        object-position: 70% 0;
    }
    @media all and (max-width: 599px) {
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
    @media all and (max-width: 599px) {
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

    @media all and (max-width: 599px) {
        width: 100%;
    }
`;
export const UtilLayout = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media all and (max-width: 599px) {
        height: 80%;
    }
`;

export const ImgWrapper = styled.div`
    width: 50%;
    height: 100%;
    overflow: hidden;
    display: flex;
    align-items: flex-end;

    @media all and (max-width: 599px) {
        width: 100%;
    }
`;

export const BackgroundWrapper = styled.div`
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    display: flex;
    @media all and (max-width: 599px) {
        flex-direction: column-reverse;
    }
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
