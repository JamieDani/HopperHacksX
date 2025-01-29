import React from 'react';
import './Pages.css';
import EnvCard from '../components/EnvCard';
import hookmapImage from '../assets/hookmap.png'
import anchormapImage from '../assets/anchormap.png'
import hatmapImage from '../assets/hatmap.png'
import { Box } from '@mui/material';

const bulletsInPerson = [
  'Held at the Stony Brook University, SAC Ballroom A', 
  'Visit the photobooth and take pictures with your team and other participants', 
  'Recieve swag such as T-shirts, stickers, and more',
  'Attend workshops and network with other students in person',
  'Catered food and drinks will be provided throughout the event'
]

const bulletsHybrid = [
  'Hybrid events that combines both in-person and virtual participation', 
  'Receive technical assistance from mentors',
  'Mini games will be held throughtout the event',
  'Network with sponsors'
]

const bulletsVirtual = [
  'Attend virtual events from anywhere', 
  'Judging will be held virtually',
  'Resume workshops will be held virtually',
  'Chat with other participants and mentors on Discord'
]

const Environment = () => {
  return (
    <div>
      <p className='section-title'>~Environment~</p>
      <Box sx={{ 
          display: 'flex', 
          flexDirection: 'row', 
          flexWrap: 'wrap',  
          justifyContent: 'center'
      }}>
        <EnvCard name='In Person' img={hookmapImage} bullets={bulletsInPerson}/>
        <EnvCard name='Hybrid' img={anchormapImage} bullets={bulletsHybrid}/>
        <EnvCard name='Virtual' img={hatmapImage} bullets={bulletsVirtual}/>
      </Box>
    </div>
  );
};

export default Environment;