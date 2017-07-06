import React from 'react'
import { connect } from 'react-redux'
import Login from '../presentation/Login'

import { authenticate} from '../../../redux/auth/actions' 
import { Redirect } from 'react-router-dom'

class UserAuthentication extends React.Component{

  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(email, password) {
    this.props.dispatch(authenticate(email, password));
  }

  render(){
    if(this.props.auth.get('isAuthenticated')){
     return (
       <Redirect from="/login" to="/home" push />
      )
    }

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
  return {
    auth: state.user.auth
  }
}

export default connect(mapStateToProps)(UserAuthentication);