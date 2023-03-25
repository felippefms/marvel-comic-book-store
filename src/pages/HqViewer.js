import React from 'react';
import { HqViewerWrapper, HqTitle, HqCover, HqDescription, HqInfoWrapper} from '../styles/HqViewer';
import Header from '../components/Header';
import { useSelector } from 'react-redux';
import Footer from '../components/Footer';

function HqViewer(){
   const selectedHq = useSelector((state) => state.SelectedHq.nome);
   const selectedHqCover = useSelector((state) => state.SelectedHq.capa);
   const selectedDescription = useSelector((state) => state.SelectedHq.descricao);
   return(
      <HqViewerWrapper>
         <Header></Header>
         <HqInfoWrapper>
            <HqTitle>{selectedHq}</HqTitle>
            <HqCover src={selectedHqCover} alt={selectedHq} />
            <HqDescription>{selectedDescription}</HqDescription>
         </HqInfoWrapper>
         <Footer></Footer>
      </HqViewerWrapper> 
   )
}

export default HqViewer;