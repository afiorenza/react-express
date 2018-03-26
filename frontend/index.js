require('./_index.scss');

import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Body from './views/body';
import Dev from './views/dev';

const App = () => <div>
  <main>
    <Switch>
      <Route exact path='/' component={Body}/>
      <Route path='/dev' component={Dev}/>
    </Switch>
  </main>
</div>;

export default App;
