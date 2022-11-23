import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Img = styled(motion.img)`
    object-fit: cover;
    width: 100%;
    position: fixed;
    bottom: 0;
    right: 0;
    height: 100%;
    z-index: 0;

    @media all and (max-width: 1135px) {
        object-position: right;
        height: 80%;
    }
    @media all and (max-width: 400px) {
        height: 60%;
    }
`;