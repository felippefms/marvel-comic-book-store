import styled from "styled-components";
import { Link } from "react-router-dom";

export const HqItemSty = styled.div`
    display: flex;
    flex-direction: column;

    .HqItem{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        margin: 20px 0 20px 0;
    }
`

export const HqImg = styled.img`
    width: 250px;
    height: 400px;

    :hover{
        border: 10px solid transparent;
    }
`

export const HqName = styled(Link)`
    width: 80%;
    color: white;
    flex-wrap: wrap;
    font-size: 1.5em;

    :hover{
        color: red;
    }
`

export const AddToCartBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: green;
    color: #fff;
    border-radius: 5px;
    width: 200px;
    height: 50px;
    margin: 10px 0 0 0;

    :Hover{
        background-color: #39a539;
        cursor: pointer;
    }
`