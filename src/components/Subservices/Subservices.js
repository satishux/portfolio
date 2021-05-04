import React, {Component} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Subservice from "./Subservice/Subservice";
import classes from './Subservices.module.scss';

class Subservices extends Component {
  render() {
    const subServices = this.props.data;
    return (

      <div className={classes.subServices}>
        <Container>
          <Row>
            {
              subServices.map((service, index) => {
                return <Col key={index} lg={4} sm={6} xs={12} className={'mt-4'}>
                  <Subservice title={service.title} icon={service.icon}>{service.body}</Subservice>
                </Col>
              })
            }
          </Row>
        </Container>
      </div>
    );
  }
}

export default Subservices;