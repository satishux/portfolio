import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import classes from './Header.module.scss';
import './Header.scss';
import { HEADER } from '../../data/content';

class Header extends Component {
  constructor(props) {
    super(props);
    const { pathname } = this.props.location;

    let key = 'home';
    if (pathname !== '/') {
      key = pathname.substring(10, pathname.length);
    }

    this.state = {
      navs: HEADER[key],
      dropdownVisible: false,
    };
  }

  navClickHandler = (event) => {
    let str = event.target.hash;
    if (str === '') {
      return;
    }
    event.preventDefault();


    str = str.substring(1, str.length);
    const section = document.getElementById(str);

    const scrollTo = this.findPos(section) - 70;

    window.scrollTo({ top: scrollTo, behavior: 'smooth' });
  };

  findPos = (obj) => {
    let curtop = 0;
    if (obj.offsetParent) {
      do {
        curtop += obj.offsetTop;
      } while ((obj = obj.offsetParent));
      return [curtop];
    }
  };

  showDropdownHandler = (nav) => {
    if (!nav.submenu) {
      return;
    }

    this.setState({ dropdownVisible: true });
  };

  hideDropdownHandler = (nav) => {
    if (!nav.submenu) {
      return;
    }

    this.setState({ dropdownVisible: false });
  };

  render() {
    const dropdownShowClass = this.state.dropdownVisible ? 'show' : '';

    return (
      <Navbar
        className={classes.navbar}
        variant="dark"
        expand="lg"
        collapseOnSelect
        fixed="top"
      >
        <Container fluid>
          <Link className={'navbar-brand'} to="/">
            ITLIQUID
          </Link>
          {/* <Navbar.Brand  href="/"></Navbar.Brand> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              {this.state.navs.map((nav, index) => {
                return (
                  <Nav.Item
                    key={index}
                    onMouseEnter={() => this.showDropdownHandler(nav)}
                    onMouseLeave={() => this.hideDropdownHandler(nav)}
                    style={{ position: 'relative' }}
                  >
                    <Link to={nav.link} className={[classes.link, 'nav-link'].join(' ')} onClick={this.navClickHandler}>
                      {nav.text}
                    </Link>

                    {/*<Nav.Link*/}
                    {/*  href={nav.link}*/}
                    {/*  className={classes.link}*/}
                    {/*  onClick={this.navClickHandler}*/}
                    {/*>*/}
                    {/*  {nav.text}*/}
                    {/*</Nav.Link>*/}
                    {nav.submenu ? (
                      <div
                        className={['dropdown-menu', dropdownShowClass].join(
                          ' '
                        )}
                      >
                        {nav.submenu.map((menu, i) => {
                          return (
                            <Link
                              className={'dropdown-item'}
                              key={i}
                              to={'/services' + menu.link}
                            >
                              {menu.text}
                            </Link>
                          );
                        })}
                      </div>
                    ) : null}
                  </Nav.Item>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default withRouter(Header);
