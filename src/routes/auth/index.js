import React from 'react';
import ReactDOM from 'react-dom';

import { Route } from 'react-router-dom'
import Login from './containers/Login';

const routes = (
  <div>
    <Route exact= 'true' path='/login' component={Login}/>
  </div>
);


export default routes; 