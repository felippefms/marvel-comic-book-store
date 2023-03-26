import styled from 'styled-components';

export const AboutPageWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
`

export const AboutBox = styled.div`
    width: 100%;
    height: 100%;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    `

export const TextBox = styled.div`
    width: 80%;
    height: 50%;
    background-color: #fff;
    border-radius: 20px;
    border: 3px solid red;

    #aboutText{
        width: 80%;
    margin: 0 auto;
    text-align: left; 
    font-family: Arial, sans-serif;
    font-size: 1.2em;
    line-height: 1.5;
    color: #333;
    padding: 30px 10px 0 10px;
    }
`