import React from 'react';
import { PaginationWrapper } from '../styles/Pagination';

function Pagination({ currentPage, pages, setCurrentPage }) {
  return (
    <PaginationWrapper>
      {Array.from(Array(pages), (item, index) => {
        return (
          <button key={index} value={index} onClick={(event) => {
            setCurrentPage(Number(event.target.value));
            window.scrollTo({ top: 0, behavior: 'smooth' });         //função para rolar a pagina para cima ao clicar
            }}  className={currentPage === index ? "active" : "" }>
            {index + 1}
          </button>
        );
      })}
    </PaginationWrapper>
  );
}

export default Pagination;