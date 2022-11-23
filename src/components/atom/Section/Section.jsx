import styled from 'styled-components';
export default styled.div`
    display: flex;
    flex-direction: row;
    background-color: ${(props) => (props.bgColor ? `${props.bgColor}` : null)};
    position: relative;
    left: 0;
    margin: 0 -64px;
    @media all and (min-width: 600px) and (max-width: 1135px) {
        margin: 0 -36px;
    }
    @media all and (max-width: 599px) {
        margin: 0 -16px;
        flex-direction: ${(props) => (props?.column ? 'column' : 'row')};
    }
`;
