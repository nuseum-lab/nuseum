import styled from 'styled-components';
import { fontSize } from '../../../lib/styles/fontSize';
import { fontWeight } from '../../../lib/styles/fontWeight';

export const HistoryWrap = styled.div`
    padding-top: 180px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1{
        font-size: ${fontSize.main_title}px;
        font-weight: ${fontWeight.sub}
    }
`
export const HistoryTextBox = styled.div`
    width: calc(100% + 128px);
    margin: 0 -64px;
    margin-bottom: 100px;
    padding: 100px 5vw 100px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media all and (max-width: 599px){
        width: calc(100% + 32px);
        margin: 0 -16px;
        padding: 100px 0;
    }
`
export const YearWrap = styled.div`
    display: flex;
    width: 100%;
    @media all and (max-width: 768px){
        flex-direction: column;
        align-items: center;
    }
    
`
export const Year = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    height: 100%;
    padding-top: 30px;
    padding-right: 7%;
    font-size: 30px;
    font-weight: 600;
    @media all and (max-width: 768px){
        width: 80%;
        align-items: center;
        padding: 0;
        margin-bottom: 20px;
    }
`
export const HistoryText = styled.div`
    width: 70%;
    background: white;
    padding: 30px 30px 0px; 
    div{
        margin-bottom: 20px;
    }
    h4{
        margin-bottom: 8px;
        font-weight: 600;
    }
    p{
        width: 100%;
    }
    @media all and (max-width: 768px){
        width: 90%;
    }
`