import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import classes from './ShowCase.module.scss';
import SectionTitle from '../SectionTitle/SectionTitle';
import FilterButton from './FilterButton/FilterButton';
import ShowCaseBox from './ShowCaseBox/ShowCaseBox';

// import image1 from '../../images/page1.png';
// import image2 from '../../images/page2.png';
// import image3 from '../../images/page3.png';
// import image4 from '../../images/page4.png';

// import { TYPES } from '../../data/content';

class ShowCase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeType: this.props.activeType,
      pages: this.props.pages,
    };
  }
  toggleFilterHandler = (type) => {
    this.setState({ activeType: type });
  };
  render() {
    const categories = this.props.categories ? this.props.categories : [];
    return (
      <div id="work" className={classes.showCase}>
        <Container fluid>
          <Row>
            <Col>
              <SectionTitle>{this.props.title}</SectionTitle>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center">
            <Col md="6">
              <div className={classes.showCaseSubtitle}>
                <p>We do awesome stuff</p>
              </div>
            </Col>
          </Row>
          {this.props.showCategories ? (
            <Row className="justify-content-center align-items-center">
              <Col md="6">
                <div className={classes.showCaseFilterBtns}>
                  {categories.map((type, index) => {
                    return (
                      <FilterButton
                        key={index}
                        active={type.includes(this.state.activeType)}
                        onBtnClicked={() => this.toggleFilterHandler(type)}
                      >
                        {type}
                      </FilterButton>
                    );
                  })}
                </div>
              </Col>
            </Row>
          ) : null}

          <Row className="my-5 mx-0">
            {this.state.pages.map((page, index) => {
              if (page.type.includes(this.state.activeType)) {
                return (
                  <Col key={index} xs="12" sm="6" md="6" lg="3">
                    <ShowCaseBox types={page.type} img={page.img} link={page.link} />
                  </Col>
                );
              } else {
                return null;
              }
            })}
          </Row>
        </Container>
      </div>
    );
  }
}

export default ShowCase;
