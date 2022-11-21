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
                style={{textShadow: '0px 3px 3px rgb(0 0 0 /20%'}}
            >
                NUSEUM
            </Text>
            <GNB />
        </Box>
    );
};

export default Header;
