import React from 'react';
import { CharactersPageWrapper } from '../styles/Characters';
import Header from "../components/Header";
import FooterWrapper from '../components/Footer';

function Characters(){
    return(
        <CharactersPageWrapper>
            <Header></Header>
            <FooterWrapper></FooterWrapper>
        </CharactersPageWrapper>
    );
}

export default Characters;