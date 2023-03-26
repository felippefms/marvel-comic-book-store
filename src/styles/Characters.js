import styled from 'styled-components';
import homeboxbgd from '../imgs/homeboxbgd.png';

export const CharactersPageWrapper = styled.div`
    width: 100%;
    height: 100%;
    background: linear-gradient(123deg, #3AAAFF 0%, #056BE8 24%, #00204A 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: space-between;
`

export const CharacterBox = styled.div`
    width: 90%;
    height: 70%;
    background-image: url(${homeboxbgd});
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    text-align: center;
    margin: 20px 0 20px 0;
    border: 5px solid red;
    border-radius: 15px;

    #CharacterBoxText{
        font-family: 'Badaboom-BB';
        text-align: center;
        font-size: 3.2em;
        color: yellow;
        background-color: #0000008c;
        text-shadow: 5px 5px #000;
        border-radius: 15px;
        padding: 5px;
        cursor: default;
    }
`