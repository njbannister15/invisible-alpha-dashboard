import React from 'react';

import { Route } from 'react-router-dom'
import Login from './containers/Login';
import Register from './containers/Register';

const routes = (
  <div>
    <Route exact= {true} path='/login' component={Login}/>
    <Route exact= {true} path='/register' component={Register}/>
  </div>
);


export default routes; 