import styled from 'styled-components';

export const Title = styled.div`
    width: '100%';
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-top: 150px;
`;

export const PointLayout = styled.div`
    height: 0;
    width: 80%;
    padding-bottom: 80%;
    background-color: rgba(93, 78, 68, 0.1);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PointBox = styled.div`
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: center;
`;

export const Point = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
