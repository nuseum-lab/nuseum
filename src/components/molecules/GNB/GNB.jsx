import { useState } from 'react';
import { Link } from 'react-router-dom';
import Text from '../../atom/Text/Text';
import {
    Box,
    GNBGroup,
    SlideButton,
    UtilGroup,
    SubGroup,
    GroupWrapper,
} from './GNB.styled';

const GNB = ({ isOpen, setIsOpen }) => {
    const [subVisible, setSubVisible] = useState(false);
    const [id, setId] = useState(0);
    return (
        <Box>
            <UtilGroup>
                <Text
                    fontStyle={{
                        fontSize: 'subtext',
                        fontWeight: 'normal',
                    }}
                    style={{ padding: '12px 0' }}
                >
                    Login
                </Text>
                <Text
                    fontStyle={{
                        fontSize: 'subtext',
                        fontWeight: 'normal',
                    }}
                    style={{ padding: '12px 0' }}
                >
                    Sign Up
                </Text>
            </UtilGroup>

            {isOpen ? null : (
                <GNBGroup>
                    <GroupWrapper
                        id={0}
                        onMouseEnter={(e) => {
                            setSubVisible(true);
                            setId(e.currentTarget.id);
                        }}
                        onMouseLeave={() => {
                            setSubVisible(false);
                        }}
                    >
                        <Text
                            fontStyle={{
                                fontSize: 'menu',
                                fontWeight: 'sub',
                                opacity: 1,
                                textShadow: 'rgb(0 0 0 / 20%) 1px 1px 1px',
                                textDecoration: '2px solid underline black',
                            }}
                            style={{
                                cursor: 'pointer',
                                padding: '20px 20px 40px 20px',
                                position: 'relative',
                            }}
                        >
                            SHOP
                        </Text>
                        {subVisible && id === '0' ? (
                            <SubGroup>
                                <Link href='#'>ME</Link>
                                <Link style={{ whiteSpace: 'pre-line' }}>
                                    SIGNIFICANT{'\n'}OTHER
                                </Link>
                            </SubGroup>
                        ) : null}
                    </GroupWrapper>
                    <GroupWrapper
                        onMouseEnter={(e) => {
                            setSubVisible(true);
                            setId(e.currentTarget.id);
                        }}
                        onMouseLeave={() => {
                            setSubVisible(false);
                        }}
                        id={1}
                    >
                        <Text
                            fontStyle={{
                                fontSize: 'menu',
                                fontWeight: 'sub',
                                opacity: 1,
                                textShadow: 'rgb(0 0 0 / 20%) 1px 1px 1px',
                                textDecoration: '2px solid underline black',
                            }}
                            style={{
                                cursor: 'pointer',
                                padding: '20px 20px 40px 20px',
                            }}
                        >
                            RESTAURANT
                        </Text>
                        {subVisible && id === '1' ? (
                            <SubGroup>
                                <Link href='#'>ME</Link>
                                <Link style={{ whiteSpace: 'pre-line' }}>
                                    SIGNIFICANT{'\n'}OTHER
                                </Link>
                            </SubGroup>
                        ) : null}
                    </GroupWrapper>
                    <GroupWrapper
                        onMouseEnter={(e) => {
                            setSubVisible(true);
                            setId(e.currentTarget.id);
                        }}
                        onMouseLeave={() => {
                            setSubVisible(false);
                        }}
                        id={2}
                    >
                        <Text
                            fontStyle={{
                                fontSize: 'menu',
                                fontWeight: 'sub',
                                opacity: 1,
                                textShadow: 'rgb(0 0 0 / 20%) 1px 1px 1px',
                                textDecoration: '2px solid underline black',
                            }}
                            style={{
                                cursor: 'pointer',
                                padding: '20px 20px 40px 20px',
                            }}
                        >
                            DIARY
                        </Text>
                        {subVisible && id === '2' ? (
                            <SubGroup>
                                <Link href='#'>ME</Link>
                                <Link style={{ whiteSpace: 'pre-line' }}>
                                    SIGNIFICANT{'\n'}OTHER
                                </Link>
                            </SubGroup>
                        ) : null}
                    </GroupWrapper>
                    <GroupWrapper
                        onMouseEnter={(e) => {
                            setSubVisible(true);
                            setId(e.currentTarget.id);
                        }}
                        onMouseLeave={() => {
                            setSubVisible(false);
                        }}
                        id={3}
                    >
                        <Text
                            fontStyle={{
                                fontSize: 'menu',
                                fontWeight: 'sub',
                                opacity: 1,
                                textShadow: 'rgb(0 0 0 / 20%) 1px 1px 1px',
                                textDecoration: '2px solid underline black',
                            }}
                            style={{
                                cursor: 'pointer',
                                padding: '20px 20px 40px 20px',
                            }}
                        >
                            ME
                        </Text>
                        {subVisible && id === '3' ? (
                            <SubGroup>
                                <Link href='#'>ME</Link>
                                <Link style={{ whiteSpace: 'pre-line' }}>
                                    SIGNIFICANT{'\n'}OTHER
                                </Link>
                            </SubGroup>
                        ) : null}
                    </GroupWrapper>
                    <GroupWrapper
                        onMouseEnter={(e) => {
                            console.log(e.currentTarget.id);
                            setSubVisible(true);
                            setId(e.currentTarget.id);
                        }}
                        onMouseLeave={() => {
                            setSubVisible(false);
                        }}
                        id={4}
                    >
                        <Text
                            fontStyle={{
                                fontSize: 'menu',
                                fontWeight: 'sub',
                                opacity: 1,
                                textShadow: 'rgb(0 0 0 / 20%) 1px 1px 1px',
                                textDecoration: '2px solid underline black',
                            }}
                            style={{
                                cursor: 'pointer',
                                padding: '20px 20px 40px 20px',
                            }}
                        >
                            LIBRARY
                        </Text>
                        {subVisible && id === '4' ? (
                            <SubGroup>
                                <Link href='#'>ME</Link>
                                <Link style={{ whiteSpace: 'pre-line' }}>
                                    SIGNIFICANT{'\n'}OTHER
                                </Link>
                            </SubGroup>
                        ) : null}
                    </GroupWrapper>
                    <GroupWrapper
                        onMouseEnter={(e) => {
                            console.log(e.currentTarget.id);
                            setSubVisible(true);
                            setId(e.currentTarget.id);
                        }}
                        onMouseLeave={() => {
                            setSubVisible(false);
                        }}
                        id={5}
                    >
                        <Text
                            fontStyle={{
                                fontSize: 'menu',
                                fontWeight: 'sub',
                                opacity: 1,
                                textShadow: 'rgb(0 0 0 / 20%) 1px 1px 1px',
                                textDecoration: '2px solid underline black',
                            }}
                            style={{
                                cursor: 'pointer',
                                padding: '20px 0px 40px 0px',
                                marginLeft: '20px',
                            }}
                        >
                            CURATOR
                        </Text>
                        {subVisible && id === '5' ? (
                            <SubGroup>
                                <Link href='#'>ME</Link>
                                <Link style={{ whiteSpace: 'pre-line' }}>
                                    SIGNIFICANT{'\n'}OTHER
                                </Link>
                            </SubGroup>
                        ) : null}
                    </GroupWrapper>
                </GNBGroup>
            )}

            <SlideButton
                isOpen={isOpen}
                className='material-symbols-outlined'
                onClick={() => setIsOpen((prev) => !prev)}
            >
                {isOpen ? 'close' : 'menu'}
            </SlideButton>
        </Box>
    );
};

export default GNB;
