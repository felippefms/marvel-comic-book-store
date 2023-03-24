import styled from 'styled-components';

import menubgdimg from '../imgs/menubgdimg.jpg';
import menuoption1 from '../imgs/menuoption1.png';
import menuoption2 from '../imgs/menuoption2.png';
import menuoption3 from '../imgs/menuoption3.png';
import menuoption4 from '../imgs/menuoption4.png';

export const MenuWrapper = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.3s ease-in-out;
    z-index: 2;

    nav{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        background-image: url(${menubgdimg});
        background-size: cover;
        width: 100%;
        max-width: 100%;
        height: 100%;
    }

    Link{
        display: none;
        align-self: center;
        justify-content: center;
        justify-items: center;
    }

    .menuitem{
        display: flex;
        align-items: center;
        justify-content: center;
        color: black;
        height: 170px;
        width: 200px;
        background-image: url(${menuoption1});
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        font-family: 'Badaboom-BB', sans-serif;
        font-size: 2em;
        
        :hover{
            color: blue;
        }
    }

    #a2{
        background-image: url(${menuoption2});

        :hover{
            color: red;
        }
    }

    #a3{
        background-image: url(${menuoption3});

        :hover{
            color: green;
        }
    }

    #a4{
        background-image: url(${menuoption4});

        :hover{
            color: orange;
        }
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
        border-radius: 5px 5px;
        border: 2px solid white;
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
    width: 60px;
    height: 60px;
    background: none;
    border: 4px solid black;
    border-radius: 50%;
    cursor: pointer;

    img{
    max-width: 100%;
    height: 100%;
    background-size: 100%;
    border: none;
    filter: contrast(100%);
    }

    :hover{
    background-color: #fff;
    border: 2px solid black;
    border-radius: 50%;
    }
`