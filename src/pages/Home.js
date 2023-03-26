import React from 'react';
import { HomeWrapper, HomeContentWrapper } from '../styles/Home';
import Header from '../components/Header';
import FooterWrapper from '../components/Footer';

import marvellogo from '../imgs/marvellogo.png';

function Home(){
    return(
        <HomeWrapper>
            <Header></Header>
                <img src={marvellogo} alt='Marvel Online Store Brasil' id='marvellogo'></img>
                <HomeContentWrapper>
                    <p id='hometext'>Bem vindo(a)<br /> a sua nova loja de quadrinhos da Marvel !</p>
                </HomeContentWrapper>
            <FooterWrapper></FooterWrapper>
        </HomeWrapper>
    );
}

export default Home;