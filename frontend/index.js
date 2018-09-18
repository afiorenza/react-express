require('./_index.scss');

import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Body from './views/body';
import Dev from './views/dev';

if (process.env.NODE_ENV !== 'production') {
  let script = document.createElement('script');

  script.setAttribute('src', 'http://localhost:35729/livereload.js');

  document.body.appendChild(script);
}

const App = () => <div>
  <main>
    <Switch>
      <Route exact path='/' component={Body}/>
      <Route path='/dev' component={Dev}/>
    </Switch>
  </main>
</div>;

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
