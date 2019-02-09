import React from 'react';
import Spinner from './spinner'
const Image = ({ posterPath }) => {
  const posterUrl = `${process.env.REACT_APP_POSTER_URL}${posterPath}`
  return (
    <div className="image-style">
      <img src={posterUrl} alt={posterPath} className="image-style" />
    </div>
  );
}

export default Image;