import React from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class LoginInfo extends React.Component {

  componentWillMount() {}

  render() {
    return (
      <div className="login-info">
        <span>
          <a>
            <img
              src="/assets/img/avatars/default_avatar_male.jpg"
              alt="me"
              className="online"/>
            <span>{this.props.firstName + " " + this.props.lastName}</span>
          </a>
        </span>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}

LoginInfo.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string
};

LoginInfo.defaultProps = {
  firstName: "Johnathan",
  lastName: "Doe"
}

export default connect(mapStateToProps)(LoginInfo)
