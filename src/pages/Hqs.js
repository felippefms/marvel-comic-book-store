import React from 'react';
import { HqsPageWrapper } from '../styles/Hqs';
import Header from "../components/Header";
import ProductsList  from '../components/ProductsList';

function Hqs(){
    return(
        <HqsPageWrapper>
            <Header></Header>
            <ProductsList></ProductsList>
        </HqsPageWrapper>
    );
}

export default Hqs;