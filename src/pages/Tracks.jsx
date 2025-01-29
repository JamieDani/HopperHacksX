import React from 'react';
import './Pages.css';

import beginnerImage from '../assets/beginner.png'
import accImage from '../assets/accessibility.png'
import healthImage from '../assets/healthcare.png'
import hardImage from '../assets/hardware.png'
import createImage from '../assets/creativity.png'
import susImage from '../assets/sustainability.png'
import aimlImage from '../assets/aiml.png';
import diversityImage from '../assets/diversity.png';
import TrackCard from '../components/TrackCard'; 
import Box from '@mui/material/Box';


const tracks = [
  {name: 'Best Beginners Hack', desc: 'Swabbie\'s First Code', img: beginnerImage},
  {name: 'Best Diversity and Inclusion Hack', desc: 'Unity of the Crew', img: diversityImage},
  {name: 'Best Creativity Hack', desc: 'Buccaneer\'s Imagination', img: createImage},
  {name: 'Best AI/ML Immersion Hack', desc: 'Artificial Admiral', img: aimlImage},
  {name: 'Best Sustainability Hack', desc: 'Green Pirate\'s Bounty', img: susImage},
  {name: 'Best Health/Wellness Hack', desc: 'Mariner\'s Health', img: healthImage},
  {name: 'Best Accessibility Hack', desc: 'Open Seas Award', img: accImage},
  {name: 'Best Hardware Hack', desc: 'Tinker\'s Treasure', img: hardImage},
  
]

const Tracks = () => {
  return (
    <div>
      <p className='section-title'>~Tracks~</p>
    <Box sx={{ 
    display: 'flex', 
    flexDirection: 'row', 
    flexWrap: 'wrap',  
    justifyContent: 'center'
    }}>
      {tracks.map(({ name, desc, img }) => (
          <Box key={name} sx={{ 
            width: { 
              xs: '70%', 
              sm: '50%',  
              md: '45%'
            },
            padding: '5px'
          }}>
            <TrackCard name={name} desc={desc} img={img}/>
          </Box>
      ))}
    </Box>
    </div>
  );
};

export default Tracks;

