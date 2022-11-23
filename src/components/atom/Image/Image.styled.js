import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Img = styled(motion.img)`
    object-fit: cover;
    width: 100%;
    position: fixed;
    height: 100%;
    z-index: 0;

    @media all and (min-width: 600px) and (max-width: 1135px) {
        object-position: -20rem 0;
    }

    @media all and (max-width: 599px) {
        object-position: -40rem 0;
    }
`;
