import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import classes from './JumbotronLead.module.scss';
// import GridAnimation from '../GridAnimation/GridAnimation';

class JumbotronLead extends Component {
  state = {
    titles: this.props.titles,
  };

  interval = null;
  componentDidMount() {
    let titles = [...this.props.titles];
    let current = 0;
    let intervalTime = 4000;

    // setTimeout(() => {
    this.interval = setInterval(() => {
      current = current >= titles.length - 1 ? 0 : current + 1;

      const newTitles = titles.map((title, index) => {
        if (index === current) {
          return { ...title, display: true };
        }
        return { ...title, display: false };
      });
      this.setState({ titles: newTitles });

      // setTimeout(() => {
      //   this.setState({ opacity: 1 });
      // }, 10);
    }, intervalTime);
    // }, intervalTime);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <Container className={classes.jumbotronLeadContainer}>
        <Row
          className={[
            'justify-content-center',
            'align-items-center',
            classes.jumbotronLead,
          ].join(' ')}
        >
          <Col lg="8" sm="12" className="text-center">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/*<GridAnimation />*/}
              {this.state.titles
                ? this.state.titles.map((title, index) => {
                    return title.display ? (
                      <div
                        // style={{
                        //   transition: '1s all',
                        //   opacity: this.state.opacity,
                        // }}

                        className={classes.jumbotronTextWrapper}
                        key={index}
                      >
                        <h2 className={classes.jumbotronTitle}>
                          {title.line1}
                        </h2>
                        <h2
                          className={[
                            classes.jumbotronTitle,
                            classes.bold,
                          ].join(' ')}
                        >
                          {title.line2}
                        </h2>
                        <h2
                          className={[
                            classes.jumbotronTitle,
                            classes.bold,
                          ].join(' ')}
                        >
                          {title.line3}
                        </h2>
                      </div>
                    ) : null;
                  })
                : null}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default JumbotronLead;
