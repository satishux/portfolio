import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import classes from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={classes.footer}>
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col className="text-center">
            <p className={classes.copyRight}>© IT Liquid</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
