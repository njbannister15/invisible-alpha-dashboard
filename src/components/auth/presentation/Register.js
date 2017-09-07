import React from 'react';
import TermsAndConditions from './TermsAndConditions';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { RenderField, required, email } from '../../common/presentation/formField'

class Register extends React.Component {

  render() {
    return (
      <div id="extr-page">
        <header id="header" className="animated fadeInDown">

          <div id="logo-group">
            <span id="logo">
              <img src="http://via.placeholder.com/250x60" alt="SmartAdmin" />
            </span>
          </div>

          <span id="extr-page-header-space">
            <span className="hidden-mobile hiddex-xs">Already registered?</span>&nbsp;
            <Link to="/login" className="btn btn-danger">Sign In</Link>
          </span>

        </header>
        <div id="main" role="main" className="animated fadeInDown">
          <div id="content" className="container">
            <div className="row">
              <div
                className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-md-offset-3 col-lg-offset-3">
                <div className="well no-padding">
                  {/*this.props.handleSubmit is a redux form function*/}
                  <form                    
                    noValidate="novalidate"
                   
                    onSubmit={this.props.handleSubmit}
                    id="smart-form-register"
                    className="smart-form client-form">
                    <header>
                      User Registration
                    </header>

                    <fieldset>
                      <section>
                        <label className="input">
                          <Field
                            icon="fa-envelope"
                            tooltip="Needed to verify your account"
                            type="text"
                            name="email"
                            placeholder="Email address"
                            component={RenderField}
                            validate={[required, email]}
                          />
                        </label>
                      </section>

                      <section>
                        <label className="input">

                          <Field
                            icon="fa-lock"
                            tooltip="Don't forget your password"
                            type="password"
                            name="password"
                            placeholder="Password"
                            id="password"
                            component={RenderField}
                            validate={[required]}
                          />

                        </label>
                      </section>

                      <section>
                        <label className="input">

                          <Field
                            icon="fa-lock"
                            tooltip="Don't forget your password"
                            type="password" name="confirm" placeholder="Confirm password"
                            component={RenderField}
                            validate={[required]}
                          />

                        </label>
                      </section>

                      <div className="row">
                        <section className="col col-6">
                          <label className="input">
                            <Field
                              icon="fa-user"
                              tooltip="Your first name"
                              type="text" name="firstName" placeholder="First name"
                              component={RenderField}
                              validate={[required]}
                            />
                          </label>
                        </section>
                        <section className="col col-6">
                          <label className="input">
                            <Field
                              icon="fa-user"
                              tooltip="Your last name"
                              type="text" name="lastName" placeholder="Last name"
                              component={RenderField}
                              validate={[required]}
                            />
                          </label>
                        </section>
                      </div>

                      <div className="row">
                        <section className="col col-12">
                          <label>
                            <strong>This account will be the managing administator account and you will be
                              able change settings at any time.</strong>
                          </label>
                        </section>
                      </div>

                      <section>
                        <label className="checkbox">
                          <input type="checkbox"
                            name="terms" id="terms"
                          />
                          <i />I agree with the
                          <a href="#" data-toggle="modal" data-target="#myModal">
                            Terms and Conditions
                          </a>
                        </label>
                      </section>
                    </fieldset>

                    <footer>

                      <button type="submit" className="btn btn-primary">
                        Register
                        </button>

                    </footer>

                    <div className="message">
                      <i className="fa fa-check" />
                      <p>
                        Thank you for your registration!
                      </p>
                    </div>
                  </form>
                  {/*</UiValidate>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="myModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                  &times;
                </button>
                <h4 className="modal-title" id="myModalLabel">Terms & Conditions</h4>
              </div>
              <div className="modal-body custom-scroll terms-body">
                <TermsAndConditions />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">
                  Cancel
                </button>
                <button type="button" className="btn btn-primary" id="i-agree">
                  <i className="fa fa-check" />
                  I Agree
                </button>

                <button type="button" className="btn btn-danger pull-left" id="print">
                  <i className="fa fa-print" />
                  Print
                </button>
              </div>
            </div>
            {/* /.modal-content */}
          </div>
          {/* /.modal-dialog */}
        </div>
      </div>
    );
  }
}


export default reduxForm({
  form: 'Register' // a unique identifier for this form
})(Register)

Register.propTypes = {
  onSubmit: PropTypes.func.isRequired
};
