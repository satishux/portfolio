

// const particlesConfig = {
//   particles: {
//     number: {
//       value: 5,
//       density: {
//         enable: true,
//         value_area: 2000,
//       },
//     },
//     color: {
//       value: '#ffffff',
//     },
//     shape: {
//       type: 'polygon',
//       stroke: {
//         width: 0,
//         color: '#000000',
//       },
//       polygon: {
//         nb_sides: 6,
//       },
//     },
//     opacity: {
//       value: 0.2,
//       random: true,
//       anim: {
//         enable: false,
//         speed: 1,
//         opacity_min: 0,
//         sync: false
//       }
//     },
//     size: {
//       value: 160,
//       random: false,
//       anim: {
//         enable: true,
//         speed: 10,
//         size_min: 40,
//         sync: false,
//       },
//     },
//     line_linked: {
//       enable: false,
//       distance: 150,
//       color: '#ffffff',
//       opacity: 0.4,
//       width: 1,
//     },
//     move: {
//       enable: true,
//       speed: 1,
//       direction: 'random',
//       random: true,
//       straight: true,
//       out_mode: 'bounce',
//       bounce: true,
//       attract: {
//         enable: false,
//         rotateX: 600,
//         rotateY: 600,
//       },
//     },
//   },
//   interactivity: {
//     detect_on: 'canvas',
//     events: {
//       // onhover: {
//       //   enable: true,
//       //   mode: 'repulse',
//       // },
//       // onclick: {
//       //   enable: true,
//       //   mode: 'push',
//       // },
//       // resize: true,
//     },
//     modes: {
//       grab: {
//         distance: 400,
//         line_linked: {
//           opacity: 1,
//         },
//       },
//       bubble: {
//         distance: 250,
//         size: 0,
//         duration: 2,
//         opacity: 0,
//         speed: 3,
//       },
//       repulse: {
//         distance: 400,
//         duration: 0.4,
//       },
//       push: {
//         particles_nb: 4,
//       },
//       remove: {
//         particles_nb: 2,
//       },
//     },
//   },
//   retina_detect: true,
// };

// const particlesConfig = {
//   "particles": {
//     "number": {
//       "value": 3,
//       "density": {
//         "enable": true,
//         "value_area": 900
//       }
//     },
//     "line_linked": {
//       "enable": false
//     },
//     "move": {
//       "speed": 1,
//       "out_mode": "bounce"
//     },
//     "opacity": {
//       "value": 0.8,
//       "random": false,
//       "anim": {
//         "enable": true,
//         "speed": 1,
//         "opacity_min": 0.2,
//         "sync": false
//       }
//     },
//     "shape": {
//       "type": [
//         "images",
//         // "polygon"
//       ],
//       "image": [
//         {
//           "src": reactImg,
//           "height": 40,
//           "width": 40
//         },
//         {
//           "src": wordpressImg,
//           "height": 40,
//           "width": 40
//         },
//         {
//           "src": cart,
//           "height": 40,
//           "width": 40
//         },
//         {
//           "src": photoshop,
//           "height": 40,
//           "width": 40
//         },
//         {
//           "src": flutter,
//           "height": 40,
//           "width": 40
//         }
//       ],
//       "images": [
//         {
//           "src": reactImg,
//           "height": 40,
//           "width": 40
//         },
//         {
//           "src": wordpressImg,
//           "height": 40,
//           "width": 40
//         },
//         {
//           "src": cart,
//           "height": 40,
//           "width": 40
//         },
//         {
//           "src": photoshop,
//           "height": 40,
//           "width": 40
//         },
//         {
//           "src": flutter,
//           "height": 40,
//           "width": 40
//         }
//       ]
//     },
//     "color": {
//       "value": "#fff"
//     },
//     "size": {
//       "value": 200,
//       "random": false,
//       "anim": {
//         "enable": true,
//         "speed": 4,
//         "size_min": 50,
//         "sync": false
//       }
//     }
//   },
//   "retina_detect": false
// }

const particlesConfig = {
  "background": {
    "color": {
      "value": "#efefef"
    },
    "position": "absolute",
    "repeat": "no-repeat",
    "size": "cover",
    "opacity": 0
  },
  "fullScreen": {
    "zIndex": 1
  },
  "interactivity": {
    "events": {
      // "onClick": {
      //   "mode": "push"
      // },
      // "onHover": {
      //   "enable": true,
      //   "mode": "bubble"
      // }
    },
    // "modes": {
    //   "bubble": {
    //     "distance": 400,
    //     "duration": 2,
    //     "opacity": 0.8,
    //     "color": {
    //       "value": "#ff0000"
    //     },
    //     "size": 40
    //   },
    //   "grab": {
    //     "distance": 400
    //   }
    // }
  },
  "particles": {
    "color": {
      // "value": "#1b1e34"
      "value": "#fff"
    },
    "links": {
      "enable": false
    },
    "move": {
      "attract": {
        "rotate": {
          "x": 600,
          "y": 1200
        }
      },
      "enable": true,
      "path": {},
      "outModes": {
        "bottom": "out",
        "left": "out",
        "right": "out",
        "top": "out"
      },
      "speed": 4
    },
    "number": {
      "density": {
        "enable": true,
        "area": 800,
        "factor": 1000

      },
      "limit": 6,
      "value": 6
    },
    "opacity": {
      "random": {
        "enable": true,
        "minimumValue": 0.1
      },
      "value": {
        "min": 0.05,
        "max": 0.1
      },
      "animation": {
        "speed": 0.1,
        "minimumValue": 0.05
      }
    },
    "shape": {
      "options": {
        "polygon": {
          "sides": 6
        },
      },
      "type": "polygon"
    },
    "size": {
      "random": {
        "enable": true,
        "minimumValue": 100
      },
      "value": {
        "min": 100,
        "max": 160
      },
      "animation": {
        "minimumValue": 40
      }
    },
    "collisions": {
      "enable": false
    }

  }
}

export default particlesConfig;
