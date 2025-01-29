import React from 'react';
import './Pages.css';
import chestImage from '../assets/chest.png'

const Sponsors = () => {
  return (
    <div>
      <p className='section-title'>~Sponsors~</p>
      <img className='image' src={chestImage} alt="treasure chest"/>
      <p className='section-text'>Sponsors will be revealed soon! If you're interested in sponsoring HopperHacks, please reach out to us at wics@cs.stonybrook.edu.</p>
    </div>
  );
};

export default Sponsors;