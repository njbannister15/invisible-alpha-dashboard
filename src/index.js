import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App';
import Login from './routes/auth/components/Login';


import './assets/css/font-awesome.min.css';
import './assets/css/smartadmin-production-plugins.min.css';
import './assets/css/smartadmin-production.min.css';
import './assets/css/smartadmin-skins.min.css';
import './assets/css/smartadmin-react.css';


import './index.css';

ReactDOM.render((
  <Router>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/login' component={Login} />
      </Switch>    
  </Router>),
  document.getElementById('root')
);
