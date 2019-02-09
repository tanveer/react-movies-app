import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';

const Rating = ({ rating }) => {
  rating = rating.toString().split('.').join('')
  const color = rating > 70 ? "#74EE15" : "#E5A509"
  return <CircularProgressbar
    percentage={rating}
    text={`${rating}%`}
    initialAnimation
    background
    strokeWidth={10}
    backgroundPadding={8}
    styles={{
      background: {
        fill: '#000',
      },
      text: {
        fill: '#fff',
      },
      path: {
        stroke: color,
        width: 24
      },
      trail: { stroke: 'transparent' },
      text: {
        fill: '#fff', fontSize: '25px', fontWeight: 700
      },
    }
    }
  />
}

export default Rating;