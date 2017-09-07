
import React from 'react'
import { Link } from 'react-router-dom';

export default function (props) {

  let imageStyle = {
    display: "block",
    margin: "0 auto"

  }
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

      <div className="row animated fadeInDown">
        <div className="col-md-6 col-md-offset-3">
          <br />
          <br />
          <h1 className="text-center" >Success!</h1>
          <span className="alerticon text-center" ><img
            style={imageStyle}
            src="assets/img/check.png" alt="checkmark" /></span>
          <br />
          <p className="text-center" >Thank you for your registration, please check your inbox to confirm your email.</p>
        </div>
      </div>
    </div>

  );
}