import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import classes from './Contact.module.scss';
import SectionTitle from '../SectionTitle/SectionTitle';
import ContactDetails from './ContactDetails/ContactDetails';
import ContactForm from './ContactForm/ContactForm';

const Contact = () => {
  return (
    <div id="contact" className={classes.contact}>
      <Container>
        <Row>
          <Col>
            <SectionTitle>Contact</SectionTitle>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center">
          <Col md="6">
            <div className={classes.contactSubtitle}>
              <p>
                Our team works constantly and hard to deliver best product that helps you business.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="4">
            <ContactDetails />
          </Col>
          <Col sm="8">
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
