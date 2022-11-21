import styled from 'styled-components';
export default styled.div`
    display: flex;
    flex-direction: row;
    background-color: ${(props) => (props.bgColor ? `${props.bgColor}` : null)};
    position: relative;
    left: 0;
    margin: 0 -64px;
    @media all and (max-width: 599px) {
        flex-direction: ${(props) => (props?.column ? 'column' : 'row')};
    }
`;
