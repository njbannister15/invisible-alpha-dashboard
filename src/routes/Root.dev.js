import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Switch, Route} from 'react-router'
import {BrowserRouter} from 'react-router-dom'
import DevTools from '../components/misc/DevTools';

import Login from './auth/container/UserAuthentication';
import Register from './auth/presentation/Register';
import Home from './home/presentation/Home'


export default class Root extends Component {
  render() {
    const {store} = this.props;
    return (
      <Provider store={store}>
        <div>
          <BrowserRouter>
            <Switch>    
                <Route  path='/login' component={Login}/>
                <Route  path='/register' component={Register}/>     
                <Route  path='/home' component={Home}/>     
            </Switch>
          </BrowserRouter>
          <DevTools/>
        </div>
      </Provider>
    );
  }
}
