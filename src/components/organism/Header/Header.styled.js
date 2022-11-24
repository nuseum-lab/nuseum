import { motion } from 'framer-motion';
import styled from 'styled-components';
import { colorPalette } from '../../../lib/styles/colorPalette';

export const Box = styled(motion.div)`
    width: 100%;
    min-height: 10vh;
    box-shadow: 0 0 30px #00000021;
    position: fixed;
    z-index: 1000;
    left: 0;
    padding: 0 64px;
    display: flex;
    flex-direction: row;
    align-items: center;
    left: 0;
    z-index: 999;
    justify-content: space-between;
    margin: 0 auto;
    position: ${(props) => (props.isOpen ? 'fixed' : null)};
    background-color: ${colorPalette.whiteOrange};
    padding: ${(props) => (props.isOpen ? '0 64px' : null)};
    box-sizing: border-box;
    @media all and (min-width: 600px) and (max-width: 1135px) {
        padding: 0 32px;
    }
    @media all and (max-width: 599px) {
        padding: 0 16px;
    }
`;

export const MenuBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 400px;
    padding: 0 64px;
`;
