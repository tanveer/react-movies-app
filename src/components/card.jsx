import React from 'react';
import CardBody from './card_body';
import Image from './image'
import Genere from '../util/genre'
import Genres from '../util/genre';

const Card = ({ movie }) => (
  <div className="card shadow">
    <CardBody {...movie} />
  </div >
)

export default Card;