import Text from '../../atom/Text/Text';
import { Box } from './Header.styled';

const Header = () => {
    return (
        <Box>
            <Text
                fontStyle={{
                    fontSize: 'logo',
                    fontWeight: 'logo',
                }}
                content={'NUSEUM'}
            />
        </Box>
    );
};

export default Header;
