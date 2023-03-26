import styled from 'styled-components';
import homeboxbgd from '../imgs/homeboxbgd.png';

export const AboutPageWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
`

export const AboutBox = styled.div`
    width: 100%;
    height: 100%;
    background: linear-gradient(123deg, #3AAAFF 0%, #056BE8 24%, #00204A 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    `

export const TextBox = styled.div`
    width: 80%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    background-image: url(${homeboxbgd});
    border-radius: 20px;
    border: 5px solid red;

    #aboutText{
    font-family: 'Badaboom-BB';
    text-align: center;
    font-size: 1.9em;
    color: yellow;
    background-color: #0000008c;
    text-shadow: 5px 5px #000;
    border-radius: 15px;
    padding: 5px;
    }
`