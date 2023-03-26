import React, { useState, useEffect } from 'react';
import axios from "axios";
import md5 from 'js-md5';

import HqItemSty from '../components/HqItem';
import Pagination from '../components/Pagination';

function GetHq(){

    const [hqList, sethqList] = useState([]); //Obtencao da lista de resultados conseguidos pela API.
    const [itemsPerPage] = useState(6) //State para pegar determinada quantia de items para exibir por pagina.
    const [currentPage, setCurrentPage] = useState(0) //Determina a pagina padrao de inicio.

    const pages = Math.ceil(hqList.length / itemsPerPage) //divisão das paginas que serao necessarias para exibir, o "Math.ceil()" ira arredondar 1 pagina a mais caso precise.
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = hqList.slice(startIndex, endIndex) // quantidade de items atuais de exibiçao.

    useEffect(() => {
      const publicKey = '75d2ced2b934937b2e5d3fa987983231';
      const privateKey = '2836a929b9315bcb6ae789a3b6a9b2bd17e9297a';
      const timeStamp = new Date().getTime().toString();
      const hash = md5(timeStamp + privateKey + publicKey);
  
      const apiUrl = `https://gateway.marvel.com/v1/public/comics?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}&limit=20&orderBy=title`;

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
            <HqItemSty currentItems={currentItems}></HqItemSty>
            <Pagination currentPage={currentPage} pages={pages} setCurrentPage={setCurrentPage} />
          </>
    )
}

export default GetHq;