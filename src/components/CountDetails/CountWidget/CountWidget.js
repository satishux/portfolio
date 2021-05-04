import React from 'react';

import 'bootstrap-icons/font/bootstrap-icons.css';

import classes from './CountWidget.module.scss';

const CountWidget = (props) => {
  let icon = props.icon === undefined ? 'bi-question' : props.icon;
  let iconClasses = ['bi', icon];
  return (
    <div className={classes.countWidget}>
      <div className={classes.countWidgetIcon}>
        <i className={iconClasses.join(' ')}></i>
      </div>
      <div className={classes.countNumber}>
        <h4>{props.number}</h4>
      </div>
      <div className={classes.countCaption}>
        <p>{props.caption}</p>
      </div>
    </div>
  );
};

export default CountWidget;
