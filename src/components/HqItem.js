import React from 'react';
import { HqItemSty, HqImg, HqName } from '../styles/HqItem';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SelectHq } from '../app/GetHqSlice';

function HqItem({ currentItems }){
   const dispatch = useDispatch();

   const handleClick = (comic) => {
      let descricao = comic.description ? comic.description : "Essa HQ não possui descrição, desculpe !";
      dispatch(SelectHq({ nome: comic.title, capa: `${comic.thumbnail.path}.${comic.thumbnail.extension}`, descricao}));
    }

   return(
      <HqItemSty>
         {currentItems.map(comic => (
            <div className='HqItem' key={comic.id} onClick={() => handleClick(comic)}>
                  <Link to={`/marvel-comic-book-store/HqViwer/${comic.id}`}>
                  <HqImg src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title}></HqImg>
            </Link>
                  <HqName to={`/marvel-comic-book-store/HqViwer/${comic.id}`}>{comic.title}</HqName>
               </div>
         ))}
      </HqItemSty> 
   )
}

export default HqItem;