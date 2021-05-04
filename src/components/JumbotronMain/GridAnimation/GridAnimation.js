import React, { Component } from 'react';

import classes from './GridAnimation.module.scss';

class GridAnimation extends Component {
  state = {
    grids: [
      {
        id: 1,
        // display: true,
        // transformPosition: 0,
        // opacity: 1,
        // delay: 10,
        classNames: [classes.grid, classes.grid1],
      },
      {
        id: 2,
        // display: true,
        // transformPosition: 0,
        // opacity: 1,
        // delay: 300,
        classNames: [classes.grid, classes.grid2],
      },
      {
        id: 3,
        // display: true,
        // transformPosition: 0,
        // opacity: 1,
        // delay: 600,
        classNames: [classes.grid, classes.grid3],
      },
    ],
  };

  interval = null;

  componentDidMount() {
    // let gridArray = [...this.state.grids];
    // this.interval = setInterval(() => {
    //   gridArray.forEach((grid, index) => {
    //     setTimeout(() => {
    //       //   gridArray[index] = { ...grid, display: true };
    //       //   this.setState({ grids: [...gridArray] });
    //       setTimeout(() => {
    //         gridArray[index] = {
    //           ...grid,
    //           transformPosition: 0,
    //         };
    //         this.setState({ grids: [...gridArray] });
    //       }, 100);
    //       setTimeout(() => {
    //         gridArray[index] = {
    //           ...grid,
    //           transformPosition: 100,
    //         };
    //         this.setState({ grids: [...gridArray] });
    //       }, 1000);
    //       setTimeout(() => {
    //         gridArray[index] = {
    //           ...grid,
    //           transformPosition: -100,
    //           opacity: 0,
    //         };
    //         this.setState({ grids: [...gridArray] });
    //       }, 2000);
    //       setTimeout(() => {
    //         gridArray[index] = {
    //           ...grid,
    //           opacity: 1,
    //           //   display: false,
    //         };
    //         this.setState({ grids: [...gridArray] });
    //       }, 3000);
    //     }, grid.delay);
    //   });
    // }, 4000);
  }

  componentWillUnmount() {
    // clearInterval(this.interval);
  }

  render() {
    return (
      <React.Fragment>
        {this.state.grids.map((grid, index) => {
          return (
            <div
              key={grid.id}
              className={grid.classNames.join(' ')}
              style={
                {
                  // opacity: grid.opacity,
                  // transform: 'translateX(' + grid.transformPosition + '%)',
                }
              }
            ></div>
          );
        })}
      </React.Fragment>
    );
  }
}

export default GridAnimation;
