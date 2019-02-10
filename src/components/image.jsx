import React from 'react';
import { Link } from 'react-router-dom'
const regex = /\s+/g

const Image = (props) => {
  const pathName = props.title.replace(regex, '-').toLowerCase()
  const { poster_path } = props
  const posterUrl = `${process.env.REACT_APP_POSTER_URL}${poster_path}`
  return (
    <div className="image-style shadow-sm">
      <Link to={{
        pathname: `/detail/${pathName}`,
        state: { movie: props }
      }}><img src={posterUrl} alt={props.title} className="image-style" /></Link>
    </div>
  );
}

export default Image;