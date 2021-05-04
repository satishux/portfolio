import React from 'react';

import LoaderSpinner from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import classes from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={classes.loader}>
      <div className={classes.loaderWrapper}>
        <LoaderSpinner
          type="Bars"
          color="#00BFFF"
          height={100}
          width={100}
          // timeout={3000} //3 secs
        />
      </div>
    </div>
  );
};

export default Loader;
