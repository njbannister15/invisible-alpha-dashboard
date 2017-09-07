import React from 'react'
import { connect } from 'react-redux'
import Login from '../presentation/Login'

import { authenticate } from '../../../redux/auth/actions'
import { Redirect } from 'react-router-dom'


class UserAuthentication extends React.Component {

  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(email, password) {
    this.props.dispatch(authenticate(email, password));
  }

  render() {

    /*
    if (this.props.auth.get('isAuthenticated')) {       
      return (
        <Redirect from="/login" to="/dashboard" push />
      )
    }
    */
    
    return (
      <div>
        <Login
          handleSubmit={this.handleSubmit}
          //error={this.props.auth.get("message")}
        />
      </div>
    );

  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(UserAuthentication);