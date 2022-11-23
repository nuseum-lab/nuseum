import { fontSize } from '../../../lib/styles/fontSize';
import Button from '../Button';
import Text from '../Text/Text';
import man from '../../../lib/assets/man.png';
import woman from '../../../lib/assets/woman.png';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

const Image = ({ imgObject, type }) => {
    const [photo, setPhoto] = useState(true);
    setInterval(() => {
        setPhoto((prev) => !prev);
    }, 4000);

    let style = {};

    if (type === 'main') {
        style.objectFit = 'cover';
        style.width = '100%';
        style.position = 'fixed';
        style.height = '100%';
        style.zIndex = 0;
    }

    return type === 'main' ? (
        <div style={{ height: '100vh' }}>
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    right: 0,
                    overflow: 'hidden',
                }}
            >
                <img style={{ ...style }} src={imgObject} alt='' />
                <AnimatePresence>
                    {photo ? (
                        <motion.img
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            src={man}
                            alt=''
                            style={{ ...style }}
                        />
                    ) : null}
                </AnimatePresence>
                <AnimatePresence>
                    {!photo ? (
                        <motion.img
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            src={woman}
                            alt=''
                            style={{ ...style }}
                        />
                    ) : null}
                </AnimatePresence>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    top: '74vh',
                }}
            >
                <Text
                    fontStyle={{
                        fontSize: 'main_title',
                        fontWeight: 'normal',
                        color: 'white',
                    }}
                    style={{ textShadow: '0 0 10px black', lineHeight: 1.1 }}
                >
                    Your Museum of
                </Text>
                <Text
                    fontStyle={{
                        fontSize: 'main_title',
                        fontWeight: 'normal',
                        color: 'white',
                    }}
                    style={{ textShadow: '0 0 10px black', lineHeight: 1.1 }}
                >
                    Nutrient Physiology & Pharmacology
                </Text>
                <Button style={{ marginTop: 30, fontSize: fontSize.button }}>
                    EXPLORE NUSEUM
                </Button>
            </div>
        </div>
    ) : null;
};

export default Image;
