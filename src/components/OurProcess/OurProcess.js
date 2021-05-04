import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import OurProcessTitle from './OurProcessTitle/OurProcessTitle';

import classes from './OurProcess.module.scss';
import ProcessWidget from './ProcessWidget/ProcessWidget';

const OurProcess = () => {
  return (
    <div className={classes.ourProcess}>
      <OurProcessTitle />
      <Container fluid>
        <Row>
          <Col sm="4">
            <ProcessWidget icon="bi-gem">Effective Communication</ProcessWidget>
          </Col>
          <Col sm="4">
            <ProcessWidget icon="bi-people">Quality Design Work</ProcessWidget>
          </Col>
          <Col sm="4">
            <ProcessWidget icon="bi-shield-check" border={false}>
              Secure and Fast
            </ProcessWidget>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurProcess;
