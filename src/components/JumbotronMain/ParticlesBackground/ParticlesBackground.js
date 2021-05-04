import React from 'react';
import Particles from 'react-particles-js';
import ParticlesConfig from '../../../configs/particles-config';

import classes from './ParticlesBackground.module.scss';

const ParticlesBackground = (props) => {
  let imgUrl = props.image ? props.image : '/images/heroImage.jpg';
  let bg = props.bg ? props.bg : 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(13,6,39,1) 35%, rgba(72,206,247,1) 100%)' ;
  return (
    <div
      style={{ backgroundImage: 'url(' + imgUrl + '), ' + bg }}
      className={classes.particlesbg}
    >
      <div className={classes.particlesOverlay}>
        <Particles
          params={ParticlesConfig}
          className={classes.particleContainer}
        />
      </div>
    </div>
  );
};

export default ParticlesBackground;
