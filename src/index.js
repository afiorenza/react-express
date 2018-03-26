// require('./_index.scss');

import {BrowserRouter, Route} from 'react-router-dom';
import React from 'react';
import _ from 'lodash';
import {App, Dev} from './views';

export const Application = () =>
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/dev" component={Dev} />
    </div>
  </BrowserRouter>

export default Application;
