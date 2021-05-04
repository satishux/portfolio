import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import classes from './Services.module.scss';
import SectionTitle from '../SectionTitle/SectionTitle';
import ServiceCard from './ServiceCard/ServiceCard';
import { SERVICES } from '../../data/content';

const Services = () => {
  let services = [
    SERVICES.service1,
    SERVICES.service2,
    SERVICES.service3,
    SERVICES.service4,
    SERVICES.service5,
    SERVICES.service6,
  ];
  return (
    <div id="services" className={classes.services}>
      <Container>
        <Row>
          <Col>
            <SectionTitle>Services</SectionTitle>
          </Col>
        </Row>
        <Row>
          {services.map((service, index) => {
            let title = index + 1 + '. ' + service.name;

            return (
              <Col lg="4" sm="6" xs="12" className="mt-4" key={index}>
                <ServiceCard
                  title={title}
                  icon={service.icon}
                  link={'/services/' + service.link}
                >
                  {service.info}
                </ServiceCard>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
