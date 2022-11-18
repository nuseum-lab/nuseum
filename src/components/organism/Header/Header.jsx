import Text from '../../atom/Text/Text';
import GNB from '../../molecules/GNB';
import { Box } from './Header.styled';

const Header = () => {
    return (
        <Box>
            <Text
                fontStyle={{
                    fontSize: 'logo',
                    fontWeight: 'logo',
                }}
            >
                NUSEUM
            </Text>
            <GNB />
        </Box>
    );
};

export default Header;
