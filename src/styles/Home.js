import styled from 'styled-components';
import homeboxbgd from '../imgs/homeboxbgd.png';

export const HomeWrapper = styled.div`
    width: 100%;
    height: 100%;
    background: linear-gradient(123deg, #3AAAFF 0%, #056BE8 24%, #00204A 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;

img{
    width: 100%;
    max-width: 500px;
}

#marvellogo{
    max-height: 300px;
    max-width: 300px;
    margin: 20px;
}
`

export const HomeContentWrapper = styled.div`
    height: 100%;
    width: 90%;
    display: flex;
    background-image: url(${homeboxbgd});
    flex-direction: column;
    flex-wrap: wrap;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: 0 0 20px 0;
    border: 5px solid red;
    border-radius: 15px;

    #hometext{
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