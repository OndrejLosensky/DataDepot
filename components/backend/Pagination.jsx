import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; 

  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className='flex flex-row items-center justify-center rounded-md absolute bottom-4 right-[29%]'>
      {totalPages > 1 && (
        <div className="border rounded-md border-gray-500 flex">
          <button
            className={`border-r rounded-l-md border-gray-500 px-3 py-1 flex items-center justify-center duration-200 ${currentPage === 1 ? 'cursor-not-allowed bg-gray-700' : 'bg-gray-500 hover:bg-gray-600'}`}
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            <FaChevronLeft className='mr-1' /> Previous
          </button>
          <ul className="flex">
            {getPageNumbers().map((page) => (
              <li
                key={page}
                className={`cursor-pointer border border-gray-500 px-3 py-1 ${currentPage === page ? 'bg-purple-400 text-white' : 'hover:bg-gray-200'}`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </li>
            ))}
          </ul>
          <button
            className={`rounded-r-md border-l border-gray-500 px-3 py-1 flex items-center duration-200 justify-center ${currentPage === totalPages ? 'cursor-not-allowed bg-gray-200' : 'bg-gray-500 hover:bg-gray-600'}`}
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
            <FaChevronRight className='ml-1' />
          </button>
        </div>
      )}
    </div>
  );
};

export default Pagination;
