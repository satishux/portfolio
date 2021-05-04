import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Testimonial from './Testimonial/Testimonial';
import { TESTIMONIALS } from '../../data/content';

import classes from './Testimonials.module.scss';

const ACTIVE_BG = '#4496db';

class Testimonials extends Component {
  state = {
    right: 0,
    current: 0,
  };

  interval = null;

  componentDidMount() {
    let index = 0;

    this.interval = setInterval(() => {
      this.rotate(index);

      if(index  >= TESTIMONIALS.testimonials.length - 1 ) {
        index = 0;
      } else {
        index += 1;
      }
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  rotate = (index, event) => {
    if(event) {
      event.preventDefault();
    }

    this.setState({ right: index * 100, current: index });
  };

  render() {
    let { testimonials } = TESTIMONIALS;

    return (
      <div className={classes.testimonials}>
        <Container>
          <Row>
            <Col className="text-center">
              <h4 className={classes.title}>Testimonials</h4>
            </Col>
          </Row>
          <Row className={classes.testimonialsRow}>
            <div
              className={classes.testimonialsContainer}
              style={{ right: this.state.right + '%' }}
            >
              {testimonials.map((testimonial, i) => {
                return (
                  <Col key={i} className={classes.testimonialsCol}>
                    <Testimonial>{testimonial}</Testimonial>
                  </Col>
                );
              })}
            </div>
          </Row>
          <Row>
            <Col className="text-center">
              <ol className={classes.indicatorList}>
                {testimonials.map((val, i) => {
                  return (
                    <li
                      key={i}
                      style={{
                        backgroundColor:
                          this.state.current === i ? ACTIVE_BG : '',
                      }}
                      onClick={(event) => this.rotate(i, event)}
                      className={classes.indicator}
                     />
                  );
                })}
              </ol>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Testimonials;