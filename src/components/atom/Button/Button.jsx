import styled from 'styled-components';

export default styled.button`
    width: 220px;
    height: 54px;
    background-color: ${(props) => (props?.bgColor ? props.bgColor : 'white')};
    color: black;
    position: relative;
    bottom: -80%;
    border-radius: 35px;
    border: none;
    cursor: pointer;
    transition: 0.2s all ease;
    &:hover {
        opacity: 0.8;
        font-weight: 900;
    }
`;
