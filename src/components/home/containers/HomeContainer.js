import React from 'react';
import { connect } from 'react-redux'
import Home from '../presentation/Home'
import {logout} from '../../auth/actions';

class HomeContainer extends React.Component {
  constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
  }

  onLogout(){
    dispatch(logout());
  }

  render(){
    return (<Home onLogout={this.onLogout}/>);
  }
}

export default connect()(HomeContainer);