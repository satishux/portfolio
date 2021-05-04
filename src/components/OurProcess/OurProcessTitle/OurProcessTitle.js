import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import classes from './OurProcessTitle.module.scss';

const OurProcessTitle = () => {
  return (
    <div className={classes.ourProcessTitle}>
      <Container>
        <Row>
          <Col className="text-center">
            <h4 className={classes.ourProcessTitleHeading}>OUR IDEOLOGY</h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurProcessTitle;
