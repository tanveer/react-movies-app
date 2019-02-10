import React from 'react';
import CardBody from './card_body';
import Image from './image'
import Genre from '../util/genre';

const Card = ({ movie }) => (
  <div className="card shadow" style={{ flexDirection: 'column' }}>
    <CardBody {...movie} />
    <div className="card-footer">

    </div>
  </div >
)

export default Card;