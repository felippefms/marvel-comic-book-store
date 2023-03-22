import React from 'react';
import { ProductsListWrapper } from '../styles/ProductsList';
import GetHq from '../api/requests';

function ProductsList(){
    return(
        <ProductsListWrapper>
            <GetHq></GetHq>
        </ProductsListWrapper>
    );
}

export default ProductsList;