import React from 'react';
import Title from './title'
import ReleaseDate from './release_date'
import Overview from './overview'

const CardBody = ({ title, release_date, overview, vote_average, genre_ids }) => {
  return (
    <div className="card-body">
      <div id="canvas">
        <div id="info">
    
          <Title title={title} />
          <ReleaseDate date={release_date} />
        </div>
      </div>
      <Overview overview={overview.substring(0, 250) + "..."} />
    </div >
  );
}

export default CardBody;