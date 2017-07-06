import React from 'react';
import { connect } from 'react-redux'
import Header from '../presentation/Header'
import {logout} from '../../../redux/auth/actions' 

class HeaderContainer extends React.Component {
  
  constructor(props){
    super(props);
    this.onLogout = this.onLogout.bind(this);
  }

  onLogout(){
    this.dispatch(logout());
  }

  render(){
    return (<Header handleLogout={this.onLogout}/>);
  }
}

export default connect()(HeaderContainer);