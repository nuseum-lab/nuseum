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
                        opacity: 0.6,
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
                        opacity: 0.6,
                    }}
                    style={{ cursor: 'pointer', padding: '20px 0 40px 40px' }}
                >
                    RESTAURANT
                </Text>
                <Text
                    fontStyle={{
                        fontSize: 'menu',
                        fontWeight: 'sub',
                        opacity: 0.6,
                    }}
                    style={{ cursor: 'pointer', padding: '20px 0 40px 40px'}}
                >
                    DIARY
                </Text>
                <Text
                    fontStyle={{
                        fontSize: 'menu',
                        fontWeight: 'sub',
                        opacity: 0.6,
                    }}
                    style={{ cursor: 'pointer', padding: '20px 0 40px 40px'}}
                >
                    ME
                </Text>
                <Text
                    fontStyle={{
                        fontSize: 'menu',
                        fontWeight: 'sub',
                        opacity: 0.6,
                    }}
                    style={{ cursor: 'pointer' , padding: '20px 0 40px 40px'}}
                >
                    LIBRARY
                </Text>
                <Text
                    fontStyle={{
                        fontSize: 'menu',
                        fontWeight: 'sub',
                        opacity: 0.6,
                    }}
                    style={{ cursor: 'pointer' , padding: '20px 0 40px 40px'}}
                >
                    CURATOR
                </Text>
            </div>
    </div>
    );
};

export default GNB;
