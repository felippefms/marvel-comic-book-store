import axios from "axios";
import React, { useState, useEffect } from 'react';
import md5 from 'js-md5';

function GetHq(){
    const [hqList, sethqList] = useState([]);

    useEffect(() => {
      const publicKey = '75d2ced2b934937b2e5d3fa987983231';
      const privateKey = '2836a929b9315bcb6ae789a3b6a9b2bd17e9297a';
      const timeStamp = new Date().getTime().toString();
      const hash = md5(timeStamp + privateKey + publicKey);
  
      const apiUrl = `https://gateway.marvel.com/v1/public/comics?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`;

    axios.get(apiUrl)
    .then(response => {
      sethqList(response.data.data.results);
      console.log();
    })

    .catch(error => {
      console.log(error);
    });
    }, []);
    
    return (
        <div>
          <div>
            {hqList.map(comic => (
            <li key={comic.id}>{comic.title}</li>
          ))}
          </div>
        </div>
    )
}

export default GetHq;