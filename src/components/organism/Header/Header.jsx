import { useState } from 'react';
import { colorPalette } from '../../../lib/styles/colorPalette';
import Text from '../../atom/Text/Text';
import GNB from '../../molecules/GNB';
import { Box } from './Header.styled';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Box isOpen={isOpen}>
            <Text
                fontStyle={{
                    fontSize: 'logo',
                    fontWeight: 'logo',
                }}
            >
                NUSEUM
            </Text>

            <GNB setIsOpen={setIsOpen} isOpen={isOpen} />

            {isOpen ? (
                <div
                    style={{
                        position: 'fixed',
                        top: 100,
                        left: 0,
                        zIndex: 999,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: colorPalette.whiteOrange,
                    }}
                ></div>
            ) : null}
        </Box>
    );
};

export default Header;
