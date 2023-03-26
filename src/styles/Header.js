import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    width: 100%;
    height: 65px;
    background-color: red;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const StoreBtn = styled.button`
    height: 100%;
    margin-right: 5px;
    background-color: red;
    background-size: 100%;
    border: none;
    cursor: pointer;

:hover{
    border-radius: 5px 5px;
        border: 2px solid white;
        background-color: #000;
}

 .storeiconsty{
    height: 100%;
 }
`