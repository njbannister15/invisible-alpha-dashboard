import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

export default class Root extends Component {
  render() {
    const {store} = this.props;
    return (
      <Provider store={store}>
        
          <Router>
            <div>
              {require('./home').default}
              {require('./auth').default}
              {require('./todo').default}
            </div>
          </Router>
      </Provider>
    );
  }
}
