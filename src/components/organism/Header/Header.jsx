import { AnimatePresence, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import { colorPalette } from '../../../lib/styles/colorPalette';
import Text from '../../atom/Text/Text';
import GNB from '../../molecules/GNB';
import { Box, MenuBox } from './Header.styled';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { scrollY } = useScroll();

    const [headerVisible, setHeaderVisible] = useState(true);
    useEffect(() => {
        scrollY.onChange((latest) => {
            if (latest === 0) {
                setHeaderVisible(true);
            } else {
                setHeaderVisible(false);
            }
        });
    }, [scrollY]);

    return (
        <AnimatePresence>
            {headerVisible ? (
                <Box
                    initial={{ y: -100 }}
                    exit={{ y: -200 }}
                    animate={{ y: 0 }}
                    transition={{
                        type: 'just',
                    }}
                    isOpen={isOpen}
                >
                    <Text
                        fontStyle={{
                            fontSize: 'logo',
                            fontWeight: 'black',
                        }}
                    >
                        NUSEUM
                    </Text>

                    <GNB setIsOpen={setIsOpen} isOpen={isOpen} />

                    {isOpen ? (
                        <div
                            style={{
                                position: 'fixed',
                                top: 100,
                                left: 0,
                                zIndex: 999,
                                width: '100vw',
                                height: '100vh',
                                paddingTop: '50px',
                                backgroundColor: colorPalette.whiteOrange,
                            }}
                        >
                            <MenuBox>
                                <Text
                                    fontStyle={{
                                        fontSize: 'normal',
                                        fontWeight: 'sub',
                                        opacity: 1,
                                        textShadow:
                                            'rgb(0 0 0 / 20%) 1px 1px 1px',
                                        textDecoration:
                                            '2px solid underline black',
                                    }}
                                    style={{ cursor: 'pointer' }}
                                >
                                    LOGIN
                                </Text>
                                <Text
                                    fontStyle={{
                                        fontSize: 'normal',
                                        fontWeight: 'sub',
                                        opacity: 1,
                                        textShadow:
                                            'rgb(0 0 0 / 20%) 1px 1px 1px',
                                        textDecoration:
                                            '2px solid underline black',
                                    }}
                                    style={{ cursor: 'pointer' }}
                                >
                                    SIGN UP
                                </Text>
                                <Text
                                    fontStyle={{
                                        fontSize: 'normal',
                                        fontWeight: 'sub',
                                        opacity: 1,
                                        textShadow:
                                            'rgb(0 0 0 / 20%) 1px 1px 1px',
                                        textDecoration:
                                            '2px solid underline black',
                                    }}
                                    style={{ cursor: 'pointer' }}
                                >
                                    SHOP
                                </Text>
                                <Text
                                    fontStyle={{
                                        fontSize: 'normal',
                                        fontWeight: 'sub',
                                        opacity: 1,
                                        textShadow:
                                            'rgb(0 0 0 / 20%) 1px 1px 1px',
                                        textDecoration:
                                            '2px solid underline black',
                                    }}
                                    style={{ cursor: 'pointer' }}
                                >
                                    RESTAURANT
                                </Text>
                                <Text
                                    fontStyle={{
                                        fontSize: 'normal',
                                        fontWeight: 'sub',
                                        opacity: 1,
                                        textShadow:
                                            'rgb(0 0 0 / 20%) 1px 1px 1px',
                                        textDecoration:
                                            '2px solid underline black',
                                    }}
                                    style={{ cursor: 'pointer' }}
                                >
                                    DIARY
                                </Text>
                                <Text
                                    fontStyle={{
                                        fontSize: 'normal',
                                        fontWeight: 'sub',
                                        opacity: 1,
                                        textShadow:
                                            'rgb(0 0 0 / 20%) 1px 1px 1px',
                                        textDecoration:
                                            '2px solid underline black',
                                    }}
                                    style={{ cursor: 'pointer' }}
                                >
                                    ME
                                </Text>
                                <Text
                                    fontStyle={{
                                        fontSize: 'normal',
                                        fontWeight: 'sub',
                                        opacity: 1,
                                        textShadow:
                                            'rgb(0 0 0 / 20%) 1px 1px 1px',
                                        textDecoration:
                                            '2px solid underline black',
                                    }}
                                    style={{ cursor: 'pointer' }}
                                >
                                    LIBRARY
                                </Text>
                                <Text
                                    fontStyle={{
                                        fontSize: 'normal',
                                        fontWeight: 'sub',
                                        opacity: 1,
                                        textShadow:
                                            'rgb(0 0 0 / 20%) 1px 1px 1px',
                                        textDecoration:
                                            '2px solid underline black',
                                    }}
                                    style={{ cursor: 'pointer' }}
                                >
                                    CURATOR
                                </Text>
                            </MenuBox>
                        </div>
                    ) : null}
                </Box>
            ) : null}
        </AnimatePresence>
    );
};

export default Header;
