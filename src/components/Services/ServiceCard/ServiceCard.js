import React from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap-icons/font/bootstrap-icons.css';

import classes from './ServiceCard.module.scss';

const ServiceCard = (props) => {
  let icon = props.icon === undefined ? 'bi-question' : props.icon;
  let iconClasses = ['bi', icon];

  let link = props.link === undefined ? '' : props.link;

  return (
    <div className={classes.serviceCard}>
      <div className={classes.iconContainer}>
        <i className={iconClasses.join(' ')}></i>
      </div>
      <h1 className={classes.title}>{props.title}</h1>
      <p className={classes.body}>{props.children}</p>
      <div>
        <Link to={link} className={classes.infoLink}>
          Info
        </Link>
        {/* <a href={link} className={classes.infoLink}>
          Info
        </a> */}
      </div>
    </div>
  );
};

export default ServiceCard;
