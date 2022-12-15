import { AnimatePresence, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import { colorPalette } from '../../../lib/styles/colorPalette';
import Text from '../../atom/Text/Text';
import GNB from '../../molecules/GNB';
import { Box, MenuBox, SubGroupMobile } from './Header.styled';
import { Link } from 'react-router-dom';
import { GroupWrapper } from '../../molecules/GNB/GNB.styled';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const [subVisibleMobile, setSubVisibleMobile] = useState(false);
    const [id, setIdMobile] = useState(0);

    function OpenSubGroup(xid) {
        if (subVisibleMobile) {
            if (xid !== id) {
                setIdMobile(xid);
            } else {
                setSubVisibleMobile(false);
                setIdMobile(0);
            }
        } else {
            setSubVisibleMobile(true);
            setIdMobile(xid);
        }
    }

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
            {headerVisible || isOpen ? (
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
                        }} style={{cursor:'pointer'}}
                        onClick={() => {
                            navigate('/');
                        }}
                    >
                        NUSEUM
                    </Text>

                    <GNB setIsOpen={setIsOpen} isOpen={isOpen} />

                    {isOpen ? (
                        <div
                            style={{
                                position: 'fixed',
                                top: '10vh',
                                left: 0,
                                zIndex: 999,
                                width: '100vw',
                                height: '90vh',
                                paddingTop: '50px',
                                backgroundColor: colorPalette.whiteOrange,
                            }}
                        >
                            <MenuBox>
                                {/* <Text
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
                                </Text> */}

                                <GroupWrapper
                                    style={{ alignItems: 'flex-start' }}
                                >
                                    <Text
                                        id={0}
                                        onClick={(e) =>
                                            OpenSubGroup(e.currentTarget.id)
                                        }
                                        fontStyle={{
                                            fontSize: 'normal',
                                            fontWeight: 'sub',
                                            opacity: 1,
                                            textShadow:
                                                'rgb(0 0 0 / 20%) 1px 1px 1px',
                                            textDecoration:
                                                '2px solid underline black',
                                        }}
                                        style={{
                                            cursor: 'pointer',
                                            textDecoration:
                                                id === '0'
                                                    ? '2px solid underline black'
                                                    : '',
                                            fontWeight: id === '0' ? 700 : '',
                                        }}
                                    >
                                        SHOP
                                    </Text>
                                    {subVisibleMobile && id === '0' ? (
                                        <SubGroupMobile>
                                            <Link href='#'>ME</Link>
                                            <Link href='#'>
                                                SIGNIFICANT OHER
                                            </Link>
                                        </SubGroupMobile>
                                    ) : null}
                                </GroupWrapper>
                                <GroupWrapper
                                    style={{ alignItems: 'flex-start' }}
                                >
                                    <Text
                                        id={1}
                                        onClick={(e) =>
                                            OpenSubGroup(e.currentTarget.id)
                                        }
                                        fontStyle={{
                                            fontSize: 'normal',
                                            fontWeight: 'sub',
                                            opacity: 1,
                                            textShadow:
                                                'rgb(0 0 0 / 20%) 1px 1px 1px',
                                            textDecoration:
                                                '2px solid underline black',
                                        }}
                                        style={{
                                            cursor: 'pointer',
                                            textDecoration:
                                                id === '1'
                                                    ? '2px solid underline black'
                                                    : '',
                                            fontWeight: id === '1' ? 700 : '',
                                        }}
                                    >
                                        RESTAURANT
                                    </Text>
                                    {subVisibleMobile && id === '1' ? (
                                        <SubGroupMobile>
                                            <Link>ME</Link>
                                            <Link>SIGNIFICANT OHER</Link>
                                        </SubGroupMobile>
                                    ) : null}
                                </GroupWrapper>
                                <GroupWrapper
                                    style={{ alignItems: 'flex-start' }}
                                >
                                    <Text
                                        id={2}
                                        onClick={(e) =>
                                            OpenSubGroup(e.currentTarget.id)
                                        }
                                        fontStyle={{
                                            fontSize: 'normal',
                                            fontWeight: 'sub',
                                            opacity: 1,
                                            textShadow:
                                                'rgb(0 0 0 / 20%) 1px 1px 1px',
                                            textDecoration:
                                                '2px solid underline black',
                                        }}
                                        style={{
                                            cursor: 'pointer',
                                            textDecoration:
                                                id === '2'
                                                    ? '2px solid underline black'
                                                    : '',
                                            fontWeight: id === '2' ? 700 : '',
                                        }}
                                    >
                                        DIARY
                                    </Text>
                                    {subVisibleMobile && id === '2' ? (
                                        <SubGroupMobile>
                                            <Link href='#'>ME</Link>
                                            <Link href='#'>
                                                SIGNIFICANT OHER
                                            </Link>
                                        </SubGroupMobile>
                                    ) : null}
                                </GroupWrapper>
                                <GroupWrapper
                                    style={{ alignItems: 'flex-start' }}
                                >
                                    <Text
                                        id={3}
                                        onClick={(e) =>
                                            OpenSubGroup(e.currentTarget.id)
                                        }
                                        fontStyle={{
                                            fontSize: 'normal',
                                            fontWeight: 'sub',
                                            opacity: 1,
                                            textShadow:
                                                'rgb(0 0 0 / 20%) 1px 1px 1px',
                                            textDecoration:
                                                '2px solid underline black',
                                        }}
                                        style={{
                                            cursor: 'pointer',
                                            textDecoration:
                                                id === '3'
                                                    ? '2px solid underline black'
                                                    : '',
                                            fontWeight: id === '3' ? 700 : '',
                                        }}
                                    >
                                        ME
                                    </Text>
                                    {subVisibleMobile && id === '3' ? (
                                        <SubGroupMobile>
                                            <Link href='#'>ME</Link>
                                            <Link href='#'>
                                                SIGNIFICANT OHER
                                            </Link>
                                        </SubGroupMobile>
                                    ) : null}
                                </GroupWrapper>
                                <GroupWrapper
                                    style={{ alignItems: 'flex-start' }}
                                >
                                    <Text
                                        id={4}
                                        onClick={(e) =>
                                            OpenSubGroup(e.currentTarget.id)
                                        }
                                        fontStyle={{
                                            fontSize: 'normal',
                                            fontWeight: 'sub',
                                            opacity: 1,
                                            textShadow:
                                                'rgb(0 0 0 / 20%) 1px 1px 1px',
                                            textDecoration:
                                                '2px solid underline black',
                                        }}
                                        style={{
                                            cursor: 'pointer',
                                            textDecoration:
                                                id === '4'
                                                    ? '2px solid underline black'
                                                    : '',
                                            fontWeight: id === '4' ? 700 : '',
                                        }}
                                    >
                                        LIBRARY
                                    </Text>
                                    {subVisibleMobile && id === '4' ? (
                                        <SubGroupMobile>
                                            <Link href='#'>ME</Link>
                                            <Link href='#'>
                                                SIGNIFICANT OHER
                                            </Link>
                                        </SubGroupMobile>
                                    ) : null}
                                </GroupWrapper>
                                <GroupWrapper
                                    style={{ alignItems: 'flex-start' }}
                                >
                                    <Text
                                        id={5}
                                        onClick={(e) =>
                                            OpenSubGroup(e.currentTarget.id)
                                        }
                                        fontStyle={{
                                            fontSize: 'normal',
                                            fontWeight: 'sub',
                                            opacity: 1,
                                            textShadow:
                                                'rgb(0 0 0 / 20%) 1px 1px 1px',
                                            textDecoration:
                                                '2px solid underline black',
                                        }}
                                        style={{
                                            cursor: 'pointer',
                                            textDecoration:
                                                id === '5'
                                                    ? '2px solid underline black'
                                                    : '',
                                            fontWeight: id === '5' ? 700 : '',
                                        }}
                                    >
                                        CURATOR
                                    </Text>
                                    {subVisibleMobile && id === '5' ? (
                                        <SubGroupMobile>
                                            <Link href='#'>ME</Link>
                                            <Link href='#'>
                                                SIGNIFICANT OHER
                                            </Link>
                                        </SubGroupMobile>
                                    ) : null}
                                </GroupWrapper>
                                <GroupWrapper>
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
                                        style={{
                                            cursor: 'pointer',
                                            textDecoration:
                                                id === '0'
                                                    ? '2px solid underline black'
                                                    : '',
                                            fontWeight: id === '0' ? 700 : '',
                                        }}
                                        onClick={() => {
                                            navigate('/history');
                                        }}
                                    >
                                        HISTORY
                                    </Text>
                                </GroupWrapper>
                            </MenuBox>
                        </div>
                    ) : null}
                </Box>
            ) : null}
        </AnimatePresence>
    );
};

export default Header;
