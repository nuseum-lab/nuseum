import styled from 'styled-components';
import { colorPalette } from '../../../lib/styles/colorPalette';
export const ImageBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 64px;
    margin: 25px 0;
`;

export const SectionImage = styled.img`
    width: 55%;
`;

export const InformationBox = styled.div`
    width: calc(100% + 128px);
    margin: 0 -64px;
    padding: 0 64px 70px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
`;

export const Img = styled.img`
    width: 75%;
    border-radius: 5px;
    @media all and (max-width: 1135px) and (min-width: 600px) {
        height: 500px;
    }
    @media all and (max-width: 599px) {
        height: 300px;
    }
`;

export const ServiceDescriptionBox = styled.div`
    background-color: ${colorPalette.blue};
    z-index: 1;
    width: 50%;
    margin-left: -20%;
    border-radius: 5px;
    padding: 150px 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media all and (max-width: 1135px) and (min-width: 600px) {
        padding: 120px 30px;
    }
    @media all and (max-width: 599px) {
        padding: 60px 30px;
    }
`;
