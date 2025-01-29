
import React from 'react';
import openmapImage from '../assets/map.png'

const EnvCard = ({ name, img, bullets }) => {

  const [isOpen, setOpen] = React.useState(false)

  return ( 
  <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}> 
    <p className='section-sub-title'>
    {name}</p>
    
    {!isOpen? <img 
      src={img} 
      alt={name} 
      style={{
        objectFit: 'contain',
        height: '170px',
        width: '310px',
        transition: 'transform 0.3s ease-in-out'
      }} 
      onMouseEnter={(e) => e.target.style.transform = 'scale(1.03)'} 
      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
      onClick={() => setOpen(!isOpen)}
    />
    :
    <div onClick={() => setOpen(!isOpen)} style={{backgroundImage: `url(${openmapImage})`, backgroundSize: 'cover', width: 310, height: 410, padding: 10, paddingTop: 40}}>
    <p className='section-sub-text' style={{paddingLeft: 50, paddingRight: 20, textAlign: 'left'}}>
      <ul>
        {bullets.map(bullet => <li>{bullet}</li>)}
      </ul>
    </p>
    </div>
    }
  </div>
)};

export default EnvCard;