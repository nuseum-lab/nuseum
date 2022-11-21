import Text from '../../atom/Text/Text';

const GNB = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end'
            }}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: 120,
                }}
            >
                <Text fontStyle={{ fontSize: 'subtext', fontWeight: 'normal' }}
                style={{padding: '12px 0'}}
                >
                    Login
                </Text>
                <Text fontStyle={{ fontSize: 'subtext', fontWeight: 'normal' }}
                style={{padding: '12px 0'}}
                >
                    Sign Up
                </Text>
            </div>
            
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >    
                <Text
                    fontStyle={{
                        fontSize: 'menu',
                        fontWeight: 'sub',
                        opacity: 1,
                        textShadow: 'rgb(0 0 0 / 15%) 0px 5px 5px',
                        textDecoration: '2px solid underline black'
                    }}
                    style={{ cursor: 'pointer', padding: '20px 0 40px 40px',
                }}
                >
                    SHOP
                </Text>
                <Text
                    fontStyle={{
                        fontSize: 'menu',
                        fontWeight: 'sub',
                        opacity: 1,
                        textShadow: 'rgb(0 0 0 / 15%) 0px 5px 5px',
                        textDecoration: '2px solid underline black'
                    }}
                    style={{ cursor: 'pointer', padding: '20px 0 40px 40px',
                 }}
                >
                    RESTAURANT
                </Text>
                <Text
                    fontStyle={{
                        fontSize: 'menu',
                        fontWeight: 'sub',
                        opacity: 1,
                        textShadow: 'rgb(0 0 0 / 15%) 0px 5px 5px',
                        textDecoration: '2px solid underline black'
                    }}
                    style={{ cursor: 'pointer', padding: '20px 0 40px 40px',
                }}
                >
                    DIARY
                </Text>
                <Text
                    fontStyle={{
                        fontSize: 'menu',
                        fontWeight: 'sub',
                        opacity: 1,
                        textShadow: 'rgb(0 0 0 / 15%) 0px 5px 5px',
                        textDecoration: '2px solid underline black'
                    }}
                    style={{ cursor: 'pointer', padding: '20px 0 40px 40px',
                }}
                >
                    ME
                </Text>
                <Text
                    fontStyle={{
                        fontSize: 'menu',
                        fontWeight: 'sub',
                        opacity: 1,
                        textShadow: 'rgb(0 0 0 / 15%) 0px 5px 5px',
                        textDecoration: '2px solid underline black'
                    }}
                    style={{ cursor: 'pointer' , padding: '20px 0 40px 40px',
                }}
                >
                    LIBRARY
                </Text>
                <Text
                    fontStyle={{
                        fontSize: 'menu',
                        fontWeight: 'sub',
                        opacity: 1,
                        textShadow: 'rgb(0 0 0 / 15%) 0px 5px 5px',
                        textDecoration: '2px solid underline black'
                    }}
                    style={{ cursor: 'pointer' , padding: '16px 0 40px 40px',
                }}
                >
                    CURATOR
                </Text>
            </div>
    </div>
    );
};

export default GNB;
