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
export const SubGroup = styled.div` 
    display: none;
    position: absolute;
    width: 160px;
    text-align: center;
    padding-top: 40px;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #FAF8F6;
    border-radius: 5px;
    transition: 0.3s all ease;
    a{
        width: 100%;
        padding: 10px;
        padding-bottom: 20px;
        font-weight: 300;
        display: inline-block;
        text-decoration: none;
        color: black;
    }
    a:hover{
        font-weight: 600
    }
`