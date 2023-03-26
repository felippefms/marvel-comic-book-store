import styled from 'styled-components';

export const CartPageWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
`

export const CartWreapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`

export const CartItem = styled.div`
    width: 90%;
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 2px solid blue;
    border-radius: 12px;
    margin: 10px 0 10px 0;
`

export const CartHqTitle = styled.p`
    color: #fff;
`

export const CartHqCover = styled.img`
    height: 95%;
    margin: 0 10px 0 10px;
`

export const RemoveButton = styled.button`
    height: 50%;
    background-color: #000;
    border: none;

#removebtnicon{
    height: 50px;
    margin: 0 10px 0 0;
    background-color: #000;
    border: none;
    cursor: pointer;
}

`