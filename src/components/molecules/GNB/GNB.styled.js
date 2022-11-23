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
    padding: 20px 0 40px 0;
    font-size: 28px;
    cursor: pointer;
    @media all and (min-width: 1135px) {
        display: ${(props) => (props.isOpen ? null : 'none')};
    }
    @media all and (max-width: 1134px) {
        display: flex;
        align-items: center;
        padding: 0;
    }
`;

export const UtilGroup = styled.div`
    display: flex;
    justify-content: space-between;
    width: 120px;
    @media all and (max-width: 1135px) {
        display: none;
    }
`;
