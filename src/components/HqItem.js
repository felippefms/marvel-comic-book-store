import React from 'react';
import { HqItemSty, HqImg, HqName } from '../styles/HqItem';

function HqItem({ currentItems }){
    return(
        <HqItemSty>
        {currentItems.map(comic => (
                <>
                    <HqImg src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title}></HqImg>
                    <HqName key={comic.id}>{comic.title}</HqName>
                </>
                ))}
        </HqItemSty>
    )
}

export default HqItem;