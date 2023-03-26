import React from 'react';
import { CartPageWrapper, CartWreapper, CartItem, CartHqTitle, CartHqCover } from '../styles/Cart';
import Header from "../components/Header";
import { useSelector } from 'react-redux';
import FooterWrapper from '../components/Footer';

function Cart(){
    const addCartName = useSelector((state) => state.AddToCart.CartItemnome);
    const addCartCover = useSelector((state) => state.AddToCart.CartItemCapa);

    return(
        <CartPageWrapper>
            <Header></Header>
                <CartWreapper>
                    <CartItem>
                        <CartHqCover src={addCartCover} alt={addCartName} />
                        <CartHqTitle>{addCartName}</CartHqTitle>
                    </CartItem>
                </CartWreapper>
            <FooterWrapper></FooterWrapper>
        </CartPageWrapper>
    );
}

export default Cart;