import React from 'react';
import Title from './title'
import ReleaseDate from './release_date'
import Overview from './overview'
import Rating from './rating';


const CardBody = ({ title, release_date, overview, vote_average }) => {
  return (
    <div className="card-body">
      <div id="canvas">
        <Rating rating={vote_average} />
        <div id="info">
          <Title title={title} />
          <ReleaseDate date={release_date} />
        </div>
      </div>
      <Overview overview={overview.substring(0, 300) + "..."} />
    </div >
  );
}

export default CardBody;