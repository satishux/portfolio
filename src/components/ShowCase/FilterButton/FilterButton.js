import React from 'react';

import classes from './FilterButton.module.scss';

const FilterButton = (props) => {
  let btnClassNames = ['btn', 'btn-dark', classes.filterButton];
  if (props.active) {
    btnClassNames.push(classes.active);
  }
  return (
    <div className={classes.filterButtonContainer}>
      <button className={btnClassNames.join(' ')} onClick={props.onBtnClicked}>
        {props.children}
      </button>
    </div>
  );
};

export default FilterButton;
