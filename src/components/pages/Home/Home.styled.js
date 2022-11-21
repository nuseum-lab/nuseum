import styled from 'styled-components';
import { colorPalette } from '../../../lib/styles/colorPalette';
import Section from '../../atom/Section/Section';
import Text from '../../atom/Text/Text';
export const ImageBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 64px;

    @media all and (max-width: 599px) {
        flex-direction: ${(props) =>
            props?.reverse ? 'column-reverse' : 'column'};
    }
`;

export const SectionImage = styled.img`
    width: 50%;
    @media all and (max-width: 599px) {
        width: 100%;
    }
`;

export const SectionTextBox = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    @media all and (max-width: 599px) {
        margin: 30px 0;
    }
    ${Text} {
        &:first-child {
            margin-bottom: 20px;
        }
    }
`;

export const InformationBox = styled.div`
    width: 100%;
    height: 100px;
    margin-top: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* margin-bottom: 70px; */
`;

export const SectionGroup = styled.div``;

export const SectionWithIndex = styled(Section)`
    @media all and (max-width: 599px) {
        flex-direction: column;
    }
`;

export const Img = styled.img`
    position: absolute;
    left: 64px;
    height: 600px;

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
    padding: 190px 30px;
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
