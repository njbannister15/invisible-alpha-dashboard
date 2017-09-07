import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Route} from 'react-router'
import DevTools from '../components/misc/DevTools';
import Dashboard from './Dashboard';
import {BrowserRouter} from 'react-router-dom'

import Login from '../components/auth/containers/UserAuthentication'
import CustomerRegistration from '../components/auth/containers/CustomerRegistration';

let renderDevTools = false;
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test') {
  renderDevTools = false;
} else {
  renderDevTools = true;
}

export default class Root extends Component {

  render() {
    const {store} = this.props;
    let devTools = null;
    if (renderDevTools) {
      devTools = <DevTools/>;
    }
    return (

      <Provider store={store}>
        <div>
          <BrowserRouter >
            <div>
              <Route exact path="/" component={Dashboard}/>
              <Route path='/register' component={CustomerRegistration}/>
              <Route path='/login' component={Login}/>

            </div>
          </BrowserRouter>
          {devTools}
        </div>
      </Provider >
    );
  }
}
