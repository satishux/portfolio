import React, { Component } from 'react';
import Lightbox from "react-image-lightbox";

import 'react-image-lightbox/style.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { TYPES } from '../../../data/content';
import classes from './ShowCaseBox.module.scss';

class ShowCaseBox extends Component {
  constructor(props) {
    super(props);
    this.imgContainer = React.createRef();
    this.imgWrapper = React.createRef();
    this.state = {
      height: 0,
      width: 0,
      imgHeight: 0,
      imgTop: 0,
      btnOpacity: 0,
      scale: true,
      lightbox: false,
      lightboxOpen: false,
      link: false
    };
  }
  componentDidMount() {
    this.setDimentions();
    window.addEventListener('resize', (e) => {
      this.setDimentions();
    });

    setTimeout(() => {
      this.setState({ scale: false });
    }, 10);

    let lightbox = false;
    let link = false;

    this.props.types.forEach((type) => {
      if(TYPES.ECOMMERECE === type || TYPES.REACT === type || TYPES.WORDPRESS === type) {
          lightbox = true;
          link = true;
      } else if(TYPES.GRAPHICS === type || TYPES.LOGO === type) {
          lightbox = true;
          link = false;
      }
    });


    this.setState({ lightbox : lightbox, link: link});
  }

  setDimentions = () => {
    let box = this.imgContainer.current;
    let width = box !== null ? box.offsetWidth : this.state.width;
    // let width = parseFloat(getComputedStyle(this.imgContainer.current).width);
    let height = (width * 65) / 100;
    this.setState({ height: height, width: width });
  };

  imageLoadHandler = () => {
    // let imgHeight = parseFloat(
    //   getComputedStyle(this.imgWrapper.current).height
    // );
    let imgHeight = this.imgWrapper.current.offsetHeight;
    // console.log(imgHeight);
    this.setState({ imgHeight: imgHeight });
  };

  mouseEnterHandler = () => {
    let top = -(this.state.imgHeight - this.state.height);
    this.setState({ imgTop: top, btnOpacity: 1 });
  };

  mouseLeaveHandler = () => {
    this.setState({ imgTop: 0, btnOpacity: 0 });
  };

  render() {
    let height = this.state.height !== 0 ? this.state.height : '';
    let link = this.props.link ? this.props.link : '';
    //
    // let imgContainerHeight = ''
    // let imgHeight = '';
    // if(this.state.imgHeight < this.state.height) {
    //   imgContainerHeight = this.state.height;
    //   console.log(imgContainerHeight);
    //   imgHeight = '100%';
    // }

    // console.log(this.state.imgHeight, this.state.height);

    return (
      <div
        style={{
          height: height,
          transform: this.state.scale ? 'scale(0.5, 0.5)' : '',
        }}
        ref={this.imgContainer}
        className={classes.showCaseBox}
        onMouseEnter={this.mouseEnterHandler}
        onMouseLeave={this.mouseLeaveHandler}
      >
        <div
          style={{ top: this.state.imgTop}}
          ref={this.imgWrapper}
          className={classes.imgContainer}
        >
          <img src={this.props.img} alt="img" onLoad={this.imageLoadHandler} />
        </div>
        <div
          style={{ opacity: this.state.btnOpacity }}
          className={classes.actionBtns}
        >
          {
            this.state.lightbox ? <button className="btn btn-primary" onClick={() => this.setState({lightboxOpen: true})}>
              <i className="bi bi-arrows-fullscreen"/>
            </button> : null
          }
          {
            this.state.link ? <button className="btn btn-primary" onClick={() => window.open(link)}>
              <i className="bi bi-chevron-right" />
            </button> : null
          }
        </div>

        {
          this.state.lightbox && this.state.lightboxOpen ? <Lightbox
            mainSrc={this.props.img}
            reactModalProps={{ overlayClassName: classes.lightbox}}
            // reactModalProps={{ style: { overlay: { zIndex: 1031} }}}
            onCloseRequest={() => this.setState({ lightboxOpen: false })}
          /> : null
        }
      </div>
    );
  }
}

export default ShowCaseBox;
