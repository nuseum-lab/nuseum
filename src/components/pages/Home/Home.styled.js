import { motion } from 'framer-motion';
import styled from 'styled-components';
import { colorPalette } from '../../../lib/styles/colorPalette';
import Section from '../../atom/Section/Section';
import Text from '../../atom/Text/Text';
export const ImageBox = styled(motion.div).attrs({
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 0.5 },
    viewport: { amount: 0.4, once: true },
})`
    width: 100%;
    max-width: 1928px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 64px;
    margin: 25px auto;

    @media all and (min-width: 600px) and (max-width: 1135px) {
        padding: 0 36px;
    }
    @media all and (max-width: 599px) {
        padding: 0 16px;
        flex-direction: ${(props) =>
            props?.reverse ? 'column-reverse' : 'column'};
    }
`;

export const SectionImage = styled(motion.img)`
    width: 50%;
    min-height: 50vh;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0px #c8c1ba;
    object-fit: cover;
    @media all and (max-width: 599px) {
        width: 100%;
    }
`;

export const SectionTextBox = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
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
    width: calc(100% + 128px);
    margin: 0 -64px;
    padding: 0 64px 70px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    @media all and (max-width: 600px) {
        width: calc(100% + 32px);
        margin: 0 -16px;
        padding: 36px 16px 20px;
        align-items: flex-start;
        justify-content: space-evenly;
        flex-direction: column;
        /* =======
    @media all and (max-width: 599px) {
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        padding: 64px;
>>>>>>> Stashed changes */
    }
`;

export const SecondSectionWrapper = styled.div`
    width: 100%;
    padding-top: 100px;
    padding-left: 64px;
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media all and (max-width: 600px) {
        padding-left: 0;
        padding-bottom: 0;
        div {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
        ${Text} {
            width: 80% !important;
        }
    }
`;

export const SectionWithIndex = styled(Section)`
    @media all and (max-width: 599px) {
        flex-direction: column;
    }
`;

export const Img = styled.img`
    width: 106%;
    height: 100%;
    object-fit: cover;
    min-height: 50vh;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 5px;
`;

export const MockupImg = styled(motion.img)`
    position: relative;
    top: -50px;
    margin-top: 10px;
    @media all and (max-width: 599px) {
        top: 0;
        height: 50vh;
        width: 100%;
        object-fit: cover;
        object-position: top;
        margin-top: -20px;
    }
`;
export const MockupWrapper = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    max-width: 45%;
    overflow: hidden;
    height: 100%;
    @media all and (max-width: 599px) {
        position: static;
        max-width: 100%;
        height: 80%;
    }
`;

export const ServiceDescriptionImg = styled.div`
    min-height: 85vh;
    width: 75%;
    overflow: hidden;
    position: relative;
    border-radius: 5px;
    @media all and (max-width: 599px) {
        min-height: 60vh;
        width: calc(100% + 32px);
    }
`;
export const ServiceDescription = styled.div`
    padding: 100px 64px 100px 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media all and (min-width: 600px) and (max-width: 1135px) {
        padding: 100px 36px 100px 0;
    }
    @media all and (max-width: 599px) {
        padding: 50px 16px;
        flex-direction: column;
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
        padding-right: 50px;
    }
    @media all and (max-width: 599px) {
        padding: 60px 20px;
        align-items: center;
        width: 90%;
        margin-left: 0;
        margin-top: -20%;
        text-align: center;
    }
`;

export const ContactBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    @media all and (max-width: 599px) {
        align-items: flex-start;
    }
`;
