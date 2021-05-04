import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap-icons/font/bootstrap-icons.css';

import classes from './ProcessWidget.module.scss';

const ProcessWidget = (props) => {
  let border = props.border === undefined ? true : props.border;
  let classNames = [classes.processWidget];

  if (border === false) {
    classNames.push('border-0');
  }

  let icon = props.icon === undefined ? 'bi-question' : props.icon;
  let iconClasses = ['bi', icon];

  return (
    <div className={classNames.join(' ')}>
      <h3 className={classes.iconContainer}>
        <i className={iconClasses.join(' ')}></i>
      </h3>
      <Row className={['align-items-center', 'justify-content-center']}>
        <Col lg="9" className="text-center">
          <h4 className={classes.processWidgetTitle}>{props.children}</h4>
        </Col>
      </Row>
    </div>
  );
};

export default ProcessWidget;
