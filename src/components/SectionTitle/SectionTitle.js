import React from 'react';

import classes from './SectionTitle.module.scss';

const SectionTitle = (props) => {
  return (
    <div className={classes.sectionTitle}>
      <h3>{props.children}</h3>
    </div>
  );
};

export default SectionTitle;
