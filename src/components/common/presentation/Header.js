import React from 'react'
import ToggleMenu from './ToggleMenu'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.handleLogout();
  }

  render() {
    return <header id="header">
      <div id="logo-group">
        <span id="logo">
          <img src= "/assets/img/logo.png" // place your logo here
            alt="SmartAdmin" />
        </span>
      </div>

      <div className="pull-right">

        <ToggleMenu className="btn-header pull-right" />

        {/* logout button */}
        <div id="logout" className="btn-header transparent pull-right">
          <span>
            <Link onClick={this.handleLogout} to="/login" title="Sign Out" data-logout-msg="You can improve your security further after logging out by closing this opened browser">
              <i className="fa fa-sign-out" />
            </Link>
          </span>
        </div>
      </div>
    </header>
  }
}


Header.propTypes = {
  handleLogout: PropTypes.func.isRequired
};