import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import classes from './CountDetails.module.scss';
import SectionTitle from '../SectionTitle/SectionTitle';
import CountWidget from './CountWidget/CountWidget';
import { COUNT } from '../../data/content';

const CountDetails = () => {
  let counts = [COUNT.count1, COUNT.count2, COUNT.count3, COUNT.count4];
  return (
    <div className={classes.countDetails}>
      <Container>
        <Row>
          <Col>
            <SectionTitle>The Count</SectionTitle>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center">
          <Col md="6">
            <div className={classes.countDetailsSubtitle}>
              <p>
                We have spent various amounts of time on activities. Oh and we
                like coffee and free time as well.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center">
          {counts.map((count, index) => {
            return (
              <Col md="3" key={index} className="text-center">
                <CountWidget
                  icon={count.icon}
                  number={count.number}
                  caption={count.caption}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default CountDetails;
