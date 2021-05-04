import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import classes from './Subservice.module.scss';

const Subservice = (props) => {
  return (
    <div className={classes.subService}>
      <div className={classes.iconContainer}>
        <FontAwesomeIcon icon={props.icon} />
      </div>
      <h1 className={classes.title}>{props.title}</h1>
      <p className={classes.body}>{props.children}</p>
    </div>
  );
};

export default Subservice;