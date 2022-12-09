import { motion } from 'framer-motion';
import styled from 'styled-components';
import { colorPalette } from '../../../lib/styles/colorPalette';
import { fontSize } from '../../../lib/styles/fontSize';
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
    margin: 0px auto;

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
    box-shadow: 0 4px 8px 0px #c8c1ba;
    object-fit: cover;
    @media all and (max-width: 599px) {
        width: 100%;
        min-height: 30vh;
    }
`;

export const SectionTextBox = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    @media all and (max-width: 599px) {
        margin: 20px 0;
        width: 100%;
        p{
            width: 86% !important;
            margin-bottom: 12px;
        }
    }
    ${Text} {
        width: 65%;
        line-height: 1.6;
        &:first-child {
            margin-bottom: 20px;
        }
    }
`;

export const InformationBox = styled.div`
    width: calc(100% + 128px);
    margin: 0 -64px;
    padding: 0 64px 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    @media all and (max-width: 600px) {
        width: calc(100% + 32px);
        margin: 0 -16px;
        padding: 36px 16px 20px;
        /* =======
    @media all and (max-width: 599px) {
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        padding: 64px;
>>>>>>> Stashed changes */
    }
`;
export const FooterTop = styled.div`
    display:flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 20px;
    @media all and (max-width: 768px){
        flex-direction: column;
        align-items: flex-start;
    }
`

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

export const Strong = styled.span`
    font-weight: 700;
    font-size: ${fontSize.strong}px;

    @media all and (max-width: 1135px) and (min-width: 600px) {
        font-size: ${fontSize.strong - 4}px;
    }
    @media all and (max-width: 599px){
        font-size: ${fontSize.strong - 6}px;
    }

`

export const Img = styled.img`
    width: 106%;
    height: 100%;
    margin-right: 8%;
    object-fit: cover;
    min-height: 50vh;
    position: absolute;
    top: 0;
    right: 0;
    @media all and (max-width: 1024px){
        margin-right: 0;
    }
`;

export const MockupImg = styled(motion.img)`
    position: relative;
    margin-top: 10px;
    height: 100%;
    @media all and (max-width: 599px) {
        top: 0;
        height: 50vh !important;
        width: 100%;
        object-fit: cover;
        object-position: top;
        margin-top: -30px;
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
        padding: 100px 32px 100px 0;
    }
    @media all and (max-width: 599px) {
        padding: 20px 16px;
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
    text-align: center;

    @media all and (max-width: 1135px) and (min-width: 600px) {
        padding: 120px 30px;
        padding-right: 50px;
    }
    @media all and (max-width: 599px) {
        padding: 50px 20px;
        align-items: center;
        width: 90%;
        margin-left: 0;
        margin-top: -20%;
    }
`;

export const ContactBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    @media all and (max-width: 768px) {
        margin-top: 12px;
        align-items: flex-start;
    }
`;
