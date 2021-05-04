import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'react-image-lightbox/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Portfolio from './containers/Portfolio/Portfolio';
import Services from './containers/Services/Services';


function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Switch>
          <Route path="/services" component={Services} />
          <Route path="/" component={Portfolio} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
