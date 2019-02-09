import React from 'react';
import CardBody from './card_body';
import Image from './image'

const Card = ({ movie }) => (
  <div className="card shadow text-white">
    <Image posterPath={movie.poster_path} />
    <CardBody {...movie} />
  </div >
)

export default Card;