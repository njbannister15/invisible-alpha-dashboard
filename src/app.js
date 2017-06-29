import React from 'react';
import ReactDOM from 'react-dom';
import Login from './routes/auth/containers/Login'
import registerServiceWorker from './registerServiceWorker';
import './assets/css/index.css'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
//import reducer from './rootReducer'
import Root from './components/root/Root';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render((
  <Root store={store}/>
), document.getElementById('root'));

registerServiceWorker();