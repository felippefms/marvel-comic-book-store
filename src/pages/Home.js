import React from 'react';
import { HomeWrapper } from '../styles/Home';
import Header from '../components/Header';
import FooterWrapper from '../components/Footer';

import marvellogo from '../imgs/marvellogo.png';

function Home(){
    return(
        <HomeWrapper>
            <Header></Header>
            <img src={marvellogo} alt='Marvel Online Store Brasil'></img>
            <FooterWrapper></FooterWrapper>
        </HomeWrapper>
    );
}

export default Home;