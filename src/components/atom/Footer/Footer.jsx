import styled from 'styled-components';

export const Footer = styled.footer`
    width: 100%;
    position: relative;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    background: #faf8f6;
`;
export const FooterWrap = styled.div`
    width: calc(100% - 128px);
    margin: 0 auto;
    border-top: 1px solid black;
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    @media all and (max-width: 1135px) and (min-width: 600px) {
        width: calc(100% - 64px);
    }
    @media all and (max-width: 599px) {
        width: calc(100% - 32px);
    }
`;
