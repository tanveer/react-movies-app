import React from 'react';


const Movie = ({ movie }) => {
  return (
    <div className="mx-2 my-2 col" style={{ display: 'flex', height: '16rem' }}>
      <div className="" style={{ width: '10rem', height: '16rem' }}>
        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} style={{ width: '10rem', height: '16rem' }} />
      </div>
      <div className="card shadow-sm bg-white col"
        style={{
          width: '20rem',
          height: '16rem',
          borderRadius: 0,
          borderLeft: 'none'
        }}>
        <div className="card-body">
          <h5 className="card-title" style={{ pdding: 0, margin: 0 }}>{movie.title}</h5>
          <small className="text-muted" style={{ pddingTop: 0, margin: 0 }}>{movie.release_date}</small>
          <p className="card-text">{movie.overview}</p>
        </div>
      </div >
    </div >
  )
}

export default Movie;