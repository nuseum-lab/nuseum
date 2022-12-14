import styled from 'styled-components';
import { fontSize } from '../../../lib/styles/fontSize';
import { fontWeight } from '../../../lib/styles/fontWeight';

export default styled.p`
    line-height: 1.4;
    font-weight: ${(props) => fontWeight[props?.fontStyle?.fontWeight]};
    font-size: ${(props) => fontSize[props?.fontStyle?.fontSize]}px;
    white-space: ${(props) => props?.fontStyle?.whiteSpace};
    color: ${(props) => props?.fontStyle?.color};
    position: ${(props) => props?.fontStyle?.position};
    bottom: ${(props) => props?.fontStyle?.bottom};
    &:hover {
        opacity: ${(props) => props?.fontStyle?.opacity};
        text-shadow: ${(props) => props?.fontStyle?.textShadow};
        text-decoration: ${(props) => props?.fontStyle?.textDecoration};
    }
    @media all and (max-width: 1135px) and (min-width: 600px) {
        font-size: ${(props) =>
            Number(fontSize[props?.fontStyle?.fontSize]) - 4}px;
    }
    @media all and (max-width: 599px) {
        font-size: ${(props) =>
            props?.fontStyle?.fontSize === 'logo' ||
            props?.fontStyle?.fontSize === 'primary'
                ? Number(fontSize[props?.fontStyle?.fontSize]) - 20
                : props?.fontStyle?.fontSize === 'main_title'
                ? Number(fontSize[props?.fontStyle?.fontSize]) - 14
                : Number(fontSize[props?.fontStyle?.fontSize]) - 6}px;
    }
`;

