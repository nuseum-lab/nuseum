import styled from 'styled-components';

const Layout = styled.div`
    max-width: 100%;
    overflow: hidden;
    @media all and (min-width: 1136px) {
        padding: 0 64px;
        
    }
    @media all and (min-width: 600px) and (max-width: 1135px) {
        padding: 0 36px;
    }
    @media all and (max-width: 599px) {
        padding: 0 16px;
    }
    height: auto;
`;

export default Layout;
