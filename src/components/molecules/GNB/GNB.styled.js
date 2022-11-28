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
export const GroupWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    a{
        color: black;
        text-decoration: none;
    }
    :hover > p > a{
        text-shadow: rgb(0 0 0 /20%) 1px 1px 1px;
        text-decoration: 2px solid underline black;
    }
`;
export const SubGroup = styled.div`
    position: absolute;
    width: 150px;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 10px;
    box-shadow: 0px 4px 5px 0px rgb(0 0 0 /20%);
    top: 80px;
    background-color: #faf8f6;
    border-radius: 5px;
    transition: 0.3s all ease;
    a {
        width: 100%;
        padding: 10px;
        padding-bottom: 20px;
        font-weight: 300;
        display: inline-block;
    }
    a:hover {
        font-weight: 600;
    }
`;
