import styled from 'styled-components';
import { fontSize } from '../../../lib/styles/fontSize';
import { fontWeight } from '../../../lib/styles/fontWeight';

export default styled.p`
    line-height: 1.2;
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
`;
