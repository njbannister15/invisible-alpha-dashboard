import React from 'react'
import { connect } from 'react-redux'
import Register from '../presentation/Register';
import RegisterSuccess from '../presentation/RegisterSuccess';

import { register } from '../../../redux/auth/actions'

class CustomerRegistration extends React.Component {

  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  /**
   * 
   * @param {*} data 
   */
  handleSubmit(data) {    
    this.props.dispatch(register(data));
  }

  render() {

    /*
    if (this.props.registration.get('signupSuccess')) {
      return (
        <RegisterSuccess />
      )
    }
    */

    return (
      <div>
        <Register
          onSubmit={this.handleSubmit}
        />
      </div>
    );


  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(CustomerRegistration);