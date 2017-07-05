import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

export default class Root extends Component {
  render() {
    const {store} = this.props;
    return (
      <Provider store={store}>
        
          <BrowserRouter>
            <Switch>    
                <Route  path='/login' component={Login}/>
                <Route  path='/register' component={Register}/>     
                <Route  path='/home' component={Home}/>     
            </Switch>
          </BrowserRouter>
      </Provider>
    );
  }
}
