import React from 'react';
import { CharactersPageWrapper, CharacterBox } from '../styles/Characters';
import Header from "../components/Header";
import FooterWrapper from '../components/Footer';

function Characters(){
    return(
        <CharactersPageWrapper>
            <Header></Header>
                <CharacterBox>
                    <p id='CharacterBoxText'>Em breve !!! </p>
                </CharacterBox>
            <FooterWrapper></FooterWrapper>
        </CharactersPageWrapper>
    );
}

export default Characters;