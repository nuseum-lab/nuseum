import styled from 'styled-components';

export const Box = styled.div`
    width: calc(100% - 128px);
    min-height: 10vh;
    background : #FAF8F6;
    position: fixed;
    z-index: 1000;
    left: 0;
    padding: 0 64px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
