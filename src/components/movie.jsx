import React from 'react';
import Image from './image'
import Card from './card';

function shoeMovieDetail(e) {
  console.log(e)
}

const Movie = ({ movie }) => {
  return (
    <div className="mx-2 my-2 card-columns" style={{ display: 'flex', justifyContent: 'center', alignItems: }}>
      <a onClick={() => shoeMovieDetail(movie.id)}><Image posterPath={movie.poster_path} /></a>
      <Card movie={movie} />
    </div >
  )
}

export default Movie; 