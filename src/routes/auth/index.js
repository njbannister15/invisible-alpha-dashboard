import React from 'react';

import { Route } from 'react-router-dom'
import Login from './container/UserAuthentication';
import Register from './presentation/Register';

const routes = (
  <div>
    <Route exact= {true} path='/login' component={Login}/>
    <Route exact= {true} path='/register' component={Register}/>
  </div>
);


export default routes; 