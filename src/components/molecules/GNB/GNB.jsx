import Text from '../../atom/Text/Text';

const GNB = () => {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: 400,
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    top: 8,
                    right: 64,
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: 120,
                }}
            >
                <Text fontStyle={{ fontSize: 'button', fontWeight: 'normal' }}>
                    Login
                </Text>
                <Text fontStyle={{ fontSize: 'button', fontWeight: 'normal' }}>
                    Sign Up
                </Text>
            </div>
            <Text
                fontStyle={{
                    fontSize: 'button',
                    fontWeight: 'sub',
                    opacity: 0.6,
                }}
                style={{ cursor: 'pointer' }}
            >
                SHOP
            </Text>
            <Text
                fontStyle={{
                    fontSize: 'button',
                    fontWeight: 'sub',
                    opacity: 0.6,
                }}
                style={{ cursor: 'pointer' }}
            >
                RESTAURANT
            </Text>
            <Text
                fontStyle={{
                    fontSize: 'button',
                    fontWeight: 'sub',
                    opacity: 0.6,
                }}
                style={{ cursor: 'pointer' }}
            >
                DIARY
            </Text>
            <Text
                fontStyle={{
                    fontSize: 'button',
                    fontWeight: 'sub',
                    opacity: 0.6,
                }}
                style={{ cursor: 'pointer' }}
            >
                ME
            </Text>
            <Text
                fontStyle={{
                    fontSize: 'button',
                    fontWeight: 'sub',
                    opacity: 0.6,
                }}
                style={{ cursor: 'pointer' }}
            >
                LIBRARY
            </Text>
            <Text
                fontStyle={{
                    fontSize: 'button',
                    fontWeight: 'sub',
                    opacity: 0.6,
                }}
                style={{ cursor: 'pointer' }}
            >
                CURATOR
            </Text>
        </div>
    );
};

export default GNB;
