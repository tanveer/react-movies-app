import React from 'react';
import Image from './image'
import Title from './title'
import Overview from './overview'
import Rating from './rating'

const Detail = (props) => {
  const { movie } = props.location.state
  const colorValue = movie.vote_average.toString().split('.').join('')
  const color = `rgba(${255 / colorValue},${255 / colorValue},${255 / colorValue},0.8)`
  const background = `${process.env.REACT_APP_POSTER_URL}${movie.backdrop_path}`
  const image = `${process.env.REACT_APP_POSTER_URL}${movie.poster_path}`
  return (
    <div className="card bg-dark text-white" >
      <img src={background} className="card-img" alt={movie.id} />
      <div className="tinted" style={{ backgroundColor: `${color}` }} >
        <div className="card-img-overlay"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <img src={image} alt={props.title} style={{ height: '26rem', width: '18rem' }} />
          <div
            style={{
              padding: 20,
              width: '50%',
              display: 'flex',
              flexDirection: 'column',
            }}>
            <h4>{movie.title}</h4>
            <div style={{ display: 'flex', alignItems: 'center', paddingBottom: 10 }}>
              <Rating rating={colorValue} /><span>User scroe</span>
            </div>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>

    </div >
  );
}

export default Detail;