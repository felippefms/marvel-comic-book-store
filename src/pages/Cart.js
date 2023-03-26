import React from 'react';
import { CartPageWrapper, CartWreapper, CartItem, CartHqTitle, CartHqCover, RemoveButton } from '../styles/Cart';
import Header from "../components/Header";
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../app/AddToCartSlice';
import FooterWrapper from '../components/Footer';
import removeicon from '../imgs/removeicon.png';

function Cart(){
    const items = useSelector((state) => state.AddToCart.items);
    const dispatch = useDispatch();

    const handleRemoveItem = (item) => {
        dispatch(removeFromCart(item));
      };
      
    return(
        <CartPageWrapper>
            <Header></Header>
                <CartWreapper>
                        {items.map(item => (
                            <CartItem key={item.CartItemnome}>
                                <CartHqCover src={item.CartItemCapa} alt={item.CartItemnome} />
                                <CartHqTitle>{item.CartItemnome}</CartHqTitle>
                                <RemoveButton onClick={() => handleRemoveItem(item)}>
                                    <img id='removebtnicon' src={removeicon}></img>
                                </RemoveButton>
                            </CartItem>
                        ))}
                </CartWreapper>
            <FooterWrapper></FooterWrapper>
        </CartPageWrapper>
    );
}

export default Cart;