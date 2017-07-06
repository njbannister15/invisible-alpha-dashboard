import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Switch, Route} from 'react-router'
import {BrowserRouter} from 'react-router-dom'
import DevTools from '../components/misc/DevTools';

import Login from '../components/auth/container/UserAuthentication';
import Register from '../components//auth/presentation/Register';
import PrivateRoute from '../components/auth/container/PrivateRoute'
import Home from '../components/home/presentation/Home'
import HelloWorld from '../components/home/presentation/HelloWorld'


export default class Root extends Component {
  render() {
    const {store} = this.props;
    return (
      <Provider store={store}>
        <div>
          <BrowserRouter>
            <Switch> 
                <Route exact path="/" component={HelloWorld}/>
                <Route  path='/login' component={Login}/>
                <Route  path='/register' component={Register}/>
                <PrivateRoute path='/home' component={Home}/>
                { 
                  // alternative way to do some routes
                  require('./todo').default
                }
            </Switch> 
          </BrowserRouter>
          <DevTools/>
        </div>
      </Provider>
    );
  }
}
