import React from 'react';
import ReactDOM from 'react-dom';

import { Route } from 'react-router-dom'
import Home from './containers/Home';

const routes = (
  <div>
    <Route exact= 'true' path='/' component={Home}/>
  </div>
);


export default routes; 