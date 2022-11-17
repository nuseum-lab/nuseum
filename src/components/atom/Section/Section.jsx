import styled from 'styled-components';
export default styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 600px;
    background-color: ${(props) => (props.bgColor ? `${props.bgColor}` : null)};
`;
