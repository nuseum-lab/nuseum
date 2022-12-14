import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { languageActions } from '../../../store/language-slice';
import Text from '../../atom/Text/Text';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    GNBGroup,
    SlideButton,
    UtilGroup,
    SubGroup,
    GroupWrapper,
} from './GNB.styled';

const GNB = ({ isOpen, setIsOpen }) => {
    const navigate = useNavigate();
    const [subVisible, setSubVisible] = useState(false);
    const [id, setId] = useState(0);
    const dispatch = useDispatch();
    return (
        <Box>
            <UtilGroup>
                <Text
                    fontStyle={{
                        fontSize: 'subtext',
                        fontWeight: 'normal',
                    }}
                    style={{ padding: '10px 0 6px' }}
                >
                    {/* Login */}
                </Text>
                <Text
                    fontStyle={{
                        fontSize: 'subtext',
                        fontWeight: 'normal',
                    }}
                    style={{ padding: '10px 0 6px' }}
                >
                    {/* Sign Up */}
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
                            }}
                            style={{
                                cursor: 'pointer',
                                padding: '12px 20px 30px 20px',
                                position: 'relative',
                            }}
                        >
                            <Link>SHOP</Link>
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
                            }}
                            style={{
                                cursor: 'pointer',
                                padding: '12px 20px 30px 20px',
                            }}
                        >
                            <Link>RESTAURANT</Link>
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
                            }}
                            style={{
                                cursor: 'pointer',
                                padding: '12px 20px 30px 20px',
                            }}
                        >
                            <Link>DIARY</Link>
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
                            }}
                            style={{
                                cursor: 'pointer',
                                padding: '12px 20px 30px 20px',
                            }}
                        >
                            <Link>ME</Link>
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
                            }}
                            style={{
                                cursor: 'pointer',
                                padding: '12px 20px 30px 20px',
                            }}
                        >
                            <Link>LIBRARY</Link>
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

                    <GroupWrapper>
                        <Text
                            fontStyle={{
                                fontSize: 'menu',
                                fontWeight: 'sub',
                                opacity: 1,
                            }}
                            style={{
                                cursor: 'pointer',
                                padding: '12px 20px 30px 20px',
                            }}
                            onClick={() => {
                                navigate('/history');
                            }}
                        >
                            <Link>HISTORY</Link>
                        </Text>
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
                            }}
                            style={{
                                cursor: 'pointer',
                                padding: '12px 0px 30px 0px',
                                marginLeft: '20px',
                            }}
                        >
                            <Link>LANGUAGE</Link>
                        </Text>
                        {subVisible && id === '5' ? (
                            <SubGroup>
                                <Link
                                    onClick={() =>
                                        dispatch(
                                            languageActions.changeLanguage(true)
                                        )
                                    }
                                    href='#'
                                >
                                    KOREAN
                                </Link>
                                <Link
                                    onClick={() =>
                                        dispatch(
                                            languageActions.changeLanguage(
                                                false
                                            )
                                        )
                                    }
                                    style={{ whiteSpace: 'pre-line' }}
                                >
                                    ENGLISH
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
