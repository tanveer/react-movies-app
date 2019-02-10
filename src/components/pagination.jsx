import React from 'react';
import ReactPaginate from 'react-paginate';


const Pagination = (props) => {
  const { pageCount, loadMoreMovies } = props;

  if (pageCount === 1) return null;
  return (
    <ReactPaginate
      pageCount={pageCount}
      onPageChange={(data) => loadMoreMovies(data)}
      containerClassName={'pagination pagination-sm justify-content-center'}
      pageLinkClassName={'page-link'}
      pageClassName={'page-item'}
      activeLinkClassName={'active'}
      activeClassName={'active'}
      previousClassName={'page-link'}
      nextClassName={'page-link'}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
    />
  );
}

export default Pagination;