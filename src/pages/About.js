import React from 'react';
import { AboutPageWrapper } from '../styles/About';
import Header from "../components/Header";
import FooterWrapper from '../components/Footer';

function About(){
    return(
        <AboutPageWrapper>
            <Header></Header>
            <FooterWrapper></FooterWrapper>
        </AboutPageWrapper>
    );
}

export default About;