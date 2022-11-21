import styled from 'styled-components';

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export const GNBGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media all and (max-width: 1135px) {
        display: none;
    }
`;

export const SlideButton = styled.span`
    @media all and (min-width: 1135px) {
        display: none;
    }
`;
