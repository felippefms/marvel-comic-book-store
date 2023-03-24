import React from 'react';
import { PaginationWrapper } from '../styles/Pagination';

function Pagination({ currentPage, pages, setCurrentPage }) {
  return (
    <PaginationWrapper>
      {Array.from(Array(pages), (item, index) => {
        return (
          <button key={index} value={index} onClick={(event) => setCurrentPage(Number(event.target.value))} className={currentPage === index ? "active" : ""}>
            {index + 1}
          </button>
        );
      })}
    </PaginationWrapper>
  );
}

export default Pagination;