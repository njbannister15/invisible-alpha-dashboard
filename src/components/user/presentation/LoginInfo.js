import React from 'react'
import ToggleShortcut from './ToggleShortcut'

import {connect} from 'react-redux';

class LoginInfo extends React.Component {

  componentWillMount() {}

  render() {
    return (

      <div className="login-info">
        <span>
          <ToggleShortcut>
            {/*<i className="fa fa-user fa-2x online" aria-hidden="true" ></i>*/}
            <img src="http://via.placeholder.com/128x128" alt="me" className="online"/>
            <span>{this.props.info.firstName + " " + this.props.info.lastName}</span><i className="fa fa-angle-down"/>
          </ToggleShortcut>
        </span>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
    .user
    .auth
    .toJS()
}

export default connect(mapStateToProps)(LoginInfo)
