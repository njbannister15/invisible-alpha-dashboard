import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import DevTools from '../misc/DevTools';

import TodoApp from '../../routes/todo/containers/TodoApp';

export default class Root extends Component {
  render() {
    const {store} = this.props;
    return (
      <Provider store={store}>
        <div>
          <Router>
            <div>
              {require('../../routes/home').default}
              {require('../../routes/auth').default}
              {require('../../routes/todo').default}
            </div>
          </Router>
          <DevTools/>
        </div>
        
      </Provider>
    );
  }
}
