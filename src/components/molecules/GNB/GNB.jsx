import Text from '../../atom/Text/Text';
import { Box, GNBGroup, SlideButton, UtilGroup } from './GNB.styled';

const GNB = ({ isOpen, setIsOpen }) => {
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
                            padding: '20px 0 40px 40px',
                        }}
                    >
                        SHOP
                    </Text>
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
                            padding: '20px 0 40px 40px',
                        }}
                    >
                        RESTAURANT
                    </Text>
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
                            padding: '20px 0 40px 40px',
                        }}
                    >
                        DIARY
                    </Text>
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
                            padding: '20px 0 40px 40px',
                        }}
                    >
                        ME
                    </Text>
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
                            padding: '20px 0 40px 40px',
                        }}
                    >
                        LIBRARY
                    </Text>
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
                            padding: '16px 0 40px 40px',
                        }}
                    >
                        CURATOR
                    </Text>
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
