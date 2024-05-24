"use client";

import { useState, useEffect } from "react";

const Pagination = ({ totalPosts, postsPerPage, currentPage, onPageChange }) => {
  const [pageNumbers, setPageNumbers] = useState([]);

  useEffect(() => {
    const totalPages = Math.ceil(totalPosts / postsPerPage);
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    setPageNumbers(pages);
  }, [totalPosts, postsPerPage]);

  const handlePageClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  return (
    <ul className="d-flex align-items-center style-none">
      {pageNumbers.map((pageNumber) => (
        <li
          className={pageNumber === currentPage ? "active" : ""}
          key={pageNumber}
          onClick={() => handlePageClick(pageNumber)}
        >
          {pageNumber}
        </li>
      ))}
      <li>...</li>
      <li>Last</li>
      <li className="arrow">
        <i className="bi bi-arrow-right" />
      </li>
    </ul>
  );
};

export default Pagination;