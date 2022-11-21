import { useState } from 'react';
import { colorPalette } from '../../../lib/styles/colorPalette';
import Text from '../../atom/Text/Text';
import GNB from '../../molecules/GNB';
import { Box, MenuBox } from './Header.styled';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Box isOpen={isOpen}>
            <Text
                fontStyle={{
                    fontSize: 'logo',
                    fontWeight: 'logo',
                }}
                style={{textShadow: '0px 3px 3px rgb(0 0 0 /20%'}}
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
                                textShadow: 'rgb(0 0 0 / 20%) 1px 1px 1px',
                                textDecoration: '2px solid underline black'
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
                                textShadow: 'rgb(0 0 0 / 20%) 1px 1px 1px',
                                textDecoration: '2px solid underline black'
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
                                textShadow: 'rgb(0 0 0 / 20%) 1px 1px 1px',
                                textDecoration: '2px solid underline black'
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
                                textShadow: 'rgb(0 0 0 / 20%) 1px 1px 1px',
                                textDecoration: '2px solid underline black'
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
                                textShadow: 'rgb(0 0 0 / 20%) 1px 1px 1px',
                                textDecoration: '2px solid underline black'
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
                                textShadow: 'rgb(0 0 0 / 20%) 1px 1px 1px',
                                textDecoration: '2px solid underline black'
                            }}
                            style={{ cursor: 'pointer' }}
                        >
                            CURATOR
                        </Text>
                    </MenuBox>
                </div>
            ) : null}
        </Box>
    );
};

export default Header;
