import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Root from './routes/Root';
import configureStore from './store/configureStore';

import {authenticate} from './routes/auth/actions'

const store = configureStore();

ReactDOM.render((
  <Root store={store}/>
), document.getElementById('root'));

registerServiceWorker();