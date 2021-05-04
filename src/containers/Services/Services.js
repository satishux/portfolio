import React, {Component} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import ApplicationServices from './ApplicationServices/ApplicationServices';
import ECommerceServices from './ECommerceServices/ECommerceServices';
import GraphicsServices from './GraphicsServices/GraphicsServices';
import ReactServices from './ReactServices/ReactServices';
import SEOServices from './SEOServices/SEOServices';
import WordpressServices from './WordpressServices/WordpressServices';

class Services extends Component {
  render() {
    let {path} = this.props.match;
    return (
      <div>
        <Switch>
          <Route path={path + '/react'}>
            <ReactServices/>
          </Route>
          <Route path={path + '/wordpress'}>
            <WordpressServices/>
          </Route>
          <Route path={path + '/ecommerce'}>
            <ECommerceServices/>
          </Route>
          <Route path={path + '/graphics'}>
            <GraphicsServices/>
          </Route>
          <Route path={path + '/applications'}>
            <ApplicationServices/>
          </Route>
          <Route path={path + '/seo'}>
            <SEOServices/>
          </Route>

        </Switch>
      </div>
    );
  }
}

export default withRouter(Services);
