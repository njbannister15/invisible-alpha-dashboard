import React from 'react';

import { Route } from 'react-router-dom'
import TodoApp from './containers/TodoApp';

const routes = (
  <div>
    <Route exact= {true} path='/todo' component={TodoApp}/>
  </div>
);


export default routes; 