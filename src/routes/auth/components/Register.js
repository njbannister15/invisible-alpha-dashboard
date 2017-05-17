import React from 'react'

import logo from '../../../assets/img/Logomakr_7w3pDt.png';

export default class Register extends React.Component {
  render() {
    return (
      <div id="extr-page">
        <header id="header" className="animated fadeInDown">

          <div id="logo-group">
            <span id="logo"> <img src={logo} alt="SmartAdmin" /> </span>
          </div>

          <span id="extr-page-header-space">
            <span className="hidden-mobile hiddex-xs">Already registered?</span>&nbsp;<a href="/login"
              className="btn btn-danger">Sign In</a> </span>

        </header>
        <div id="main" role="main" className="animated fadeInDown">

          {/* MAIN CONTENT */}
          <div id="content" className="container">

            <div className="row">

              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-lg-offset-3">
                <div className="well no-padding">

                  <form action="#/dashboard" id="smart-form-register" className="smart-form client-form">
                    <header>
                      Register
                    </header>

                    <fieldset>
                      <section>
                        <label className="input"> <i className="icon-append fa fa-envelope" />
                          <input type="email" name="email" placeholder="Email address" />
                          <b className="tooltip tooltip-bottom-right">Needed to verify your account</b> </label>
                      </section>

                      <section>
                        <label className="input"> <i className="icon-append fa fa-lock" />
                          <input type="password" name="password" placeholder="Password" id="password" />
                          <b className="tooltip tooltip-bottom-right">Don't forget your password</b> </label>
                      </section>

                      <section>
                        <label className="input"> <i className="icon-append fa fa-lock" />
                          <input type="password" name="passwordConfirm" placeholder="Confirm password" />
                          <b className="tooltip tooltip-bottom-right">Don't forget your password</b> </label>
                      </section>
                    </fieldset>

                    <fieldset>
                      <div className="row">
                        <section className="col col-6">
                          <label className="input">
                            <input type="text" name="firstname" placeholder="First name" />
                          </label>
                        </section>
                        <section className="col col-6">
                          <label className="input">
                            <input type="text" name="lastname" placeholder="Last name" />
                          </label>
                        </section>
                      </div>
                      <section>
                        <label className="checkbox">
                          <input type="checkbox" name="subscription" id="subscription" />
                          <i />I want to receive news!</label>
                      </section>
                    </fieldset>
                    <footer>
                      <a href="#/dashboard" className="btn btn-primary">
                        Register
                      </a>
                    </footer>

                    <div className="message">
                      <i className="fa fa-check" />
                      <p>
                        Thank you for your registration!
                      </p>
                    </div>
                  </form>

                </div>              
                <h5 className="text-center">- Or sign in using -</h5>
                <ul className="list-inline text-center">
                  <li>
                    <a href="#" className="btn btn-primary btn-circle"><i className="fa fa-google" /></a>
                  </li>
                  <li>
                    <a href="#" className="btn btn-info btn-circle"><i className="fa fa-facebook" /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}