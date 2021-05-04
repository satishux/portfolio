import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

import Header from '../Header/Header';

import classes from './Layout.module.scss';

class Layout extends Component {
  render() {
    return (
      <div id="layout" className={classes.layout}>
        <Header />
        <Container fluid className={classes.main}>
          {this.props.children}
        </Container>
      </div>
    );
  }
}

export default Layout;
