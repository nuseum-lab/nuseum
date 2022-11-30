import styled from 'styled-components';

export const Title = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-top: 150px;
`;

export const PointLayout = styled.div`
    width: 100%;
    height: 50%;
    background-color: rgba(93, 78, 68, 0.1);
    border-radius: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    @media all and (max-width: 768px) {
        padding-top: 30px;
    }
`;

export const PointBox = styled.div`
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: flex-start;
    height: 80%;
    @media all and (max-width: 768px) {
        margin-top: 30px;
    }
`;

export const Point = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    height: 70%;
    @media all and (max-width: 768px) {
        margin-bottom: 30px;
    }
`;

export const PointImg = styled.img`
    width: 40%;
    @media all and (max-width: 768px) {
        width: 45%;
        margin-bottom: 10px;
    }
    @media all and (max-width: 620px) {
        width: 60%;
    }
`;
