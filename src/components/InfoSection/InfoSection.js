import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import parse from 'html-react-parser';

import classes from './InfoSection.module.scss';
// import { INFOSECTION } from '../../data/content';

const InfoSection = (props) => {
  return (
    <div id="ideology" className={classes.infoSection}>
      <Container>
        <Row>
          <Col sm="3" lg="2">
            <h2 className={classes.infoSectionHeading}>{props.heading}</h2>
          </Col>
          <Col sm="9" lg="10">
            <h3 className={classes.infoSectionSubheading}>
              {parse(props.subheading)}
            </h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InfoSection;
