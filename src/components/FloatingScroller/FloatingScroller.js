import React from 'react';

import ScrollSpyNav from 'react-scrollspy-nav';
import 'bootstrap-icons/font/bootstrap-icons.css';

import classes from './FloatingScroller.module.scss';

const FloatingScroller = () => {
  return (
    <div className={classes.floatingScroller}>
      <ScrollSpyNav scrollTargetIds={['home']} offset={0} scrollDuration="1200">
        <ul className={classes.scrollerList}>
          <li>
            <a
              href="#home"
              className={['btn', 'btn-primary', classes.floatingButton].join(
                ' '
              )}
            >
              <i className="bi bi-chevron-up"></i>
            </a>
          </li>
        </ul>
      </ScrollSpyNav>
    </div>
  );
};

export default FloatingScroller;
