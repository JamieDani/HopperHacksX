
import React from 'react';

const TrackCard = ({ name, img, desc }) => {
  return ( 
  <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}> 
    <img 
      src={img} 
      alt={name} 
      style={{
        objectFit: 'contain',
        height: '280px',
        width: '280px',
        transition: 'transform 0.3s ease-in-out'
      }} 
      onMouseEnter={(e) => e.target.style.transform = 'scale(1.03)'} 
      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
    />
    <p className='section-text'>
    {name}</p>
    <p className='section-tiny-text'>
    {desc}</p>
  </div>
)};

export default TrackCard;