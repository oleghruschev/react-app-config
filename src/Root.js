import React, { Fragment } from 'react';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { renderRoutes } from 'react-router-config';

import routes from './routes';

import Navigation from './components/Navigation';

const history = createBrowserHistory();

const Root = () => (
  <Router history={history}>
    <Fragment>
      <Navigation />
      {renderRoutes(routes)}
    </Fragment>
  </Router>
);

export default Root;
