import React from 'react';
import logo from '../../../assets/img/logo.svg';
//import '../../../assets/css/Login.css';
import UiValidate from '../../../components/forms/validation/UiValidate'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {email:'', password:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  handleSubmit(event) {   
    event.preventDefault();
    this.props.handleSubmit(this.state.email, this.state.password);
  }

  render() {
    return (
      <div id="extr-page">
        <header id="header" className="animated fadeInDown">


          <div id="logo-group">
            <span id="logo"> <img src="assets/img/logo.png" alt="SmartAdmin"/> </span>
          </div>

          <span id="extr-page-header-space">
            <span className="hidden-mobile hiddex-xs">Need an account?</span>&nbsp;
            <Link to="/register"  className="btn btn-danger">Create account</Link>
            {/*<a href="#/register" className="btn btn-danger">Create account</a>*/}
          </span>

        </header>
        <div id="main" role="main" className="animated fadeInDown">
          <div id="content" className="container">
            <div className="row">
              <div
                className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-md-offset-3 col-lg-offset-4">
                <div className="well no-padding">
                  <UiValidate>
                    <form onSubmit={this.handleSubmit} id="login-form" className="smart-form client-form">
                      <header>
                        Sign In
                      </header>
                      <fieldset>
                        <section>
                          <label className="label">E-mail</label>
                          <label className="input">
                            <i className="icon-append fa fa-user"/>
                            <input
                              type="email"
                              name="email"
                              data-smart-validate-input=""
                              data-required=""
                              data-email=""
                              data-message-required="Please enter your email address"
                              data-message-email="Please enter a VALID email address"
                              value={this.state.email} 
                              onChange={this.handleChange}
                              />
                            <b className="tooltip tooltip-top-right"><i className="fa fa-user txt-color-teal"/>
                              Please enter email address/username</b>
                          </label>
                        </section>
                        <section>
                          <label className="label">Password</label>
                          <label className="input">
                            <i className="icon-append fa fa-lock"/>
                            <input
                              type="password"
                              name="password"
                              data-smart-validate-input=""
                              data-required=""
                              data-minlength="3"
                              data-maxnlength="20"
                              data-message="Please enter your email password"
                              value={this.state.password} 
                              onChange={this.handleChange}
                              />
                            <b className="tooltip tooltip-top-right"><i className="fa fa-lock txt-color-teal"/>
                              Enter your password</b>
                          </label>

                          <div className="note">
                            <a href="#/forgot">Forgot password?</a>
                          </div>
                        </section>
                        <section>
                          <label className="checkbox">
                            <input type="checkbox" name="remember" defaultChecked={true}/>
                            <i/>Remember Me</label>
                        </section>
                      </fieldset>
                      <footer>
                        <button type="submit" className="btn btn-primary">
                          Sign in
                        </button>
                      </footer>
                    </form>
                  </UiValidate>
                </div>
                <h5 className="text-center">
                  - Or sign in using -</h5>
                <ul className="list-inline text-center">
                  <li>
                    <a href="#" className="btn btn-primary btn-circle"><i className="fa fa-facebook"/></a>
                  </li>
                  <li>
                    <a href="#" className="btn btn-info btn-circle"><i className="fa fa-twitter"/></a>
                  </li>
                  <li>
                    <a href="#" className="btn btn-warning btn-circle"><i className="fa fa-linkedin"/></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};