import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

import ParticlesBackground from './ParticlesBackground/ParticlesBackground';
import JumbotronLead from './JumbotronLead/JumbotronLead';

import classes from './JumbotronMain.module.scss';

const JumbotronMain = (props) => {
  return (
    <Jumbotron id="home" className={classes.jumbotronMain}>
      <ParticlesBackground image={props.image} bg={props.bg} />
      <JumbotronLead titles={props.titles} />
    </Jumbotron>
  );
};

export default JumbotronMain;
