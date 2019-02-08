import React from 'react';
import ReactPaginate from 'react-paginate';


const Pagination = (props) => {
  const { pageCount, countPerPage, loadMoreMovies } = props;
  const totalPageCount = Math.ceil(pageCount / countPerPage)

  if (pageCount === 1) return null;
  return (
   <ReactPaginate
          pageCount={ totalPageCount }
          onPageChange={(data) => loadMoreMovies(data)}
          containerClassName={'pagination pagination-sm justify-content-center'}
          pageLinkClassName={'page-link'}
          pageClassName={'page-item'}
          activeLinkClassName={'active'}
          activeClassName={'active'}
          previousClassName={'page-link'}
          nextClassName={'page-link'}
          marginPagesDisplayed={2}
          pageRangeDisplayed={10}
        />
  );
}

export default Pagination;