import styled from 'styled-components';
import { colorPalette } from '../../../lib/styles/colorPalette';

export const Box = styled.div`
    width: 100%;
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
