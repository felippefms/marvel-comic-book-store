import styled from 'styled-components';

export const MenuWrapper = styled.div`
    position: absolute;
    height: 100vh;
    width: 100%;
    background: rgb(236,255,0);
    background: grey;
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
    
`
export const OpenMenu = styled.button`
    width: 70px;
    height: 100%;
    margin-left: 5px;
    background-color: red;
    background-image: url();
    background-size: 100%;
    border: none;
`

export const CloseMenu = styled.button`
    position: absolute;
    top: 10px;
    right: 20px;
    width: 40px;
    height: 40px;
    background: none;
`