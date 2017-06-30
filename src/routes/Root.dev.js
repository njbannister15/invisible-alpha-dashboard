import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom'
import DevTools from '../components/misc/DevTools';

export default class Root extends Component {
  render() {
    const {store} = this.props;
    return (
      <Provider store={store}>
        <div>
          <Router>
            <div>
              {require('./home').default}
              {require('./auth').default}
              {require('./todo').default}
            </div>
          </Router>
          <DevTools/>
        </div>

      </Provider>
    );
  }
}
