import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ResultBox = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Result = styled(motion.p)`
    width: 100%;
    font-size: 12px;
    text-align: left;
    display: flex;
    flex-direction: column;
    line-height: 16px;
    border-radius: 10px;
    margin-bottom: 5px;
`;
export const Divider = styled(motion.hr)`
    width: 100%;
`;
