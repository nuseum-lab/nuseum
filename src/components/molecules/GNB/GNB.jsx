import Text from '../../atom/Text/Text';
import { Box, GNBGroup, SlideButton, UtilGroup, SubGroup } from './GNB.styled';

const GNB = ({ isOpen, setIsOpen }) => {
    const SubShown = (e) =>{
        if(e.currentTarget === e.target){
           e.target.children[0].style.display = 'inline-block'; 
        }
        
    }
    const SubHide = (e) =>{
       if(e.currentTarget === e.target){
            e.target.children[0].style.display = 'none';
        }
    }
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
                <GNBGroup >
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
                        onMouseOver={SubShown}
                        onMouseLeave={SubHide}
                    >
                        SHOP
                            <SubGroup>
                                <a href="#">ME</a>
                                <a>SIGNIFICANT<br></br>OTHER</a>
                            </SubGroup>

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
                            padding: '20px 20px 40px 20px',
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
                            padding: '20px 20px 40px 20px',
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
                            padding: '20px 20px 40px 20px',
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
                            padding: '20px 20px 40px 20px',
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
                            padding: '20px 0px 40px 0px',
                            marginLeft: '20px'
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
