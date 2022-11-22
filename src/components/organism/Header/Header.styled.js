import styled from 'styled-components';
import { colorPalette } from '../../../lib/styles/colorPalette';

export const Box = styled.div`
    width: 100%;
    min-height: 10vh;
    background : #FAF8F6;
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
    height: ${(props) => (props.isOpen ? '114px' : null)};
    background-color: ${colorPalette.whiteOrange};
    padding: ${(props) => (props.isOpen ? '0 64px' : null)};
    box-sizing: border-box;
`;

export const MenuBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 400px;
    padding: 0 64px;
`;
