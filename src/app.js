import React from 'react';
import ReactDOM from 'react-dom';
import Login from './routes/auth/containers/Login'
import registerServiceWorker from './registerServiceWorker';
import './assets/css/index.css'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

// Setup main page routed here.
ReactDOM.render((
  <Router>
    <div>      
      {require('./routes/home').default}    
      {require('./routes/auth').default}
    </div>
  </Router>
), document.getElementById('root'));

registerServiceWorker();