import React from 'react'
import { connect } from 'react-redux'
import Login from '../presentation/Login'

import {authenticate} from '../actions'

class UserAuthentication extends React.Component{

  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(email, password) {
    this.props.dispatch(authenticate(email, password));
  }

  render(){
    return (
      <div>
        <Login
          handleSubmit={this.handleSubmit}
        />
      </div>
    );

  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(UserAuthentication);