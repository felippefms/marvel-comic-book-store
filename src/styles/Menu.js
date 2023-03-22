import styled from 'styled-components';
import menubgdimg from '../imgs/menubgdimg.jpg';

export const MenuWrapper = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background: black;
    transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.3s ease-in-out;

    nav{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    Link{

    }

    a{

    }

    img{
        width: 100%;
        max-width: 100%;
        height: 100%;
        filter: contrast(10%);
    }
`
export const OpenMenu = styled.button`
    width: 60px;
    height: 100%;
    margin-left: 5px;
    background-color: red;
    background-size: 100%;
    border: none;
    cursor: pointer;

    :hover{
        border-radius: 95%;
        background-color: #000;
    }

    img{
    max-width: 100%;
    height: 100%;
    background-size: 100%;
    border: none;
    }
`

export const CloseMenu = styled.button`
    position: absolute;
    top: 10px;
    right: 20px;
    width: 50px;
    height: 50px;
    background: none;
    border: none;
    cursor: pointer;

    img{
    max-width: 100%;
    height: 100%;
    background-size: 100%;
    border: none;
    filter: contrast(100%);
    }

    img:hover{
    background-color: #fff;
    border-radius: 80%;
    }
`