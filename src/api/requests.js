import React, { useState, useEffect } from 'react';
import axios from "axios";
import md5 from 'js-md5';

import HqItem from '../components/HqItem';

function GetHq(){
    const [hqList, sethqList] = useState([]);

    useEffect(() => {
      const publicKey = '75d2ced2b934937b2e5d3fa987983231';
      const privateKey = '2836a929b9315bcb6ae789a3b6a9b2bd17e9297a';
      const timeStamp = new Date().getTime().toString();
      const hash = md5(timeStamp + privateKey + publicKey);
  
      const apiUrl = `https://gateway.marvel.com/v1/public/comics?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}&limit=10&orderBy=title`;

    axios.get(apiUrl)
    .then(response => {
      sethqList(response.data.data.results);
    })

    .catch(error => {
      console.log(error);
    });
    }, []);
    
    return (
          <>
            {hqList.map(comic => (
              <HqItem>
                <img className='HqImg' src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />
                <p className='HqName' key={comic.id}>{comic.title}</p>
              </HqItem>
          ))}
          </>
    )
}

export default GetHq;