import Text from '../../atom/Text/Text';
import { Box, GNBGroup, SlideButton } from './GNB.styled';

const GNB = ({ isOpen, setIsOpen }) => {
    return (
        <Box>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: 120,
                    paddingTop: '12px',
                }}
            >
                <Text fontStyle={{ fontSize: 'subtext', fontWeight: 'normal' }}>
                    Login
                </Text>
                <Text fontStyle={{ fontSize: 'subtext', fontWeight: 'normal' }}>
                    Sign Up
                </Text>
            </div>

            <GNBGroup>
                <Text
                    fontStyle={{
                        fontSize: 'menu',
                        fontWeight: 'sub',
                        opacity: 0.6,
                    }}
                    style={{
                        cursor: 'pointer',
                        padding: '20px 0 40px 40px',
                    }}
                >
                    SHOP
                </Text>
                <Text
                    fontStyle={{
                        fontSize: 'menu',
                        fontWeight: 'sub',
                        opacity: 0.6,
                    }}
                    style={{
                        cursor: 'pointer',
                        padding: '20px 0 40px 40px',
                    }}
                >
                    RESTAURANT
                </Text>
                <Text
                    fontStyle={{
                        fontSize: 'menu',
                        fontWeight: 'sub',
                        opacity: 0.6,
                    }}
                    style={{
                        cursor: 'pointer',
                        padding: '20px 0 40px 40px',
                    }}
                >
                    DIARY
                </Text>
                <Text
                    fontStyle={{
                        fontSize: 'menu',
                        fontWeight: 'sub',
                        opacity: 0.6,
                    }}
                    style={{
                        cursor: 'pointer',
                        padding: '20px 0 40px 40px',
                    }}
                >
                    ME
                </Text>
                <Text
                    fontStyle={{
                        fontSize: 'menu',
                        fontWeight: 'sub',
                        opacity: 0.6,
                    }}
                    style={{
                        cursor: 'pointer',
                        padding: '20px 0 40px 40px',
                    }}
                >
                    LIBRARY
                </Text>
                <Text
                    fontStyle={{
                        fontSize: 'menu',
                        fontWeight: 'sub',
                        opacity: 0.6,
                    }}
                    style={{
                        cursor: 'pointer',
                        padding: '20px 0 40px 40px',
                    }}
                >
                    CURATOR
                </Text>
            </GNBGroup>
            <SlideButton
                style={{
                    padding: '20px 0 40px 0',
                    fontSize: 28,
                    cursor: 'pointer',
                }}
                className='material-symbols-outlined'
                onClick={() => setIsOpen((prev) => !prev)}
            >
                {isOpen ? 'close' : 'menu'}
            </SlideButton>
        </Box>
    );
};

export default GNB;
