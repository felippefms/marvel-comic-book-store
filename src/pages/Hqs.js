import React from 'react';
import { HqsPageWrapper } from '../styles/Hqs';
import Header from "../components/Header";
import ProductsList  from '../components/ProductsList';
import FooterWrapper from '../components/Footer';

function Hqs(){
    return(
        <HqsPageWrapper>
            <Header></Header>
            <ProductsList></ProductsList>
            <FooterWrapper></FooterWrapper>
        </HqsPageWrapper>
    );
}

export default Hqs;