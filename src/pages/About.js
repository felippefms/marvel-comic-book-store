import React from 'react';
import { AboutPageWrapper, AboutBox, TextBox } from '../styles/About';
import Header from "../components/Header";
import FooterWrapper from '../components/Footer';

function About(){
    return(
        <AboutPageWrapper>
            <Header></Header>
            <AboutBox>
                <TextBox>
                    <p id='aboutText'>
                    Ola !<br/> Bem vindo(a) a nova loja de HQs da Marvel no Brasil !!!<br/>
                    Estamos felizes por estar com voce, va a pagina de quadrinhos para adicionar
                    o que desejar ao carrinho de compras e aproveite para visualizar os detalhes de suas historias favoritas !
                    </p>
                </TextBox>
            </AboutBox>
            <FooterWrapper></FooterWrapper>
        </AboutPageWrapper>
    );
}

export default About;