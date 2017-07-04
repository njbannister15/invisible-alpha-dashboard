import React from 'react';

import { Route } from 'react-router-dom'
import TodoApp from './containers/TodoApp';

const routes = (
  <div>
    <Route path='/todo' component={TodoApp}/>
  </div>
);


export default routes; 