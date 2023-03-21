import React from 'react';
import { HomeWrapper } from '../styles/Home';
import Header from '../components/Header';

import storelogo from '../imgs/storelogo.png';

function Home(){
    return(
        <HomeWrapper>
            <Header></Header>
            <img src={storelogo} alt='Marvel Online Store Brasil'></img>
            
        </HomeWrapper>
    );
}

export default Home;