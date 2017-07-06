import React from 'react';
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route, Link, Redirect, withRouter} from 'react-router-dom'

class PrivateRoute extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    let Component = this.props.component;
    let isAuthenticated = this.props.isAuthenticated;
    
    let renderer = (props) => {      
      return (isAuthenticated
        ? <Component/>
        : <Redirect
          to={{
          pathname: '/login',
          state: {
            from: props.location
          }
        }}/>)
    }
    return (<Route path={this.props.path} render={renderer}/>);
  }

}

function mapStateToProps(state) {
  return {isAuthenticated: state.user.auth.get('isAuthenticated')}
}

export default connect(mapStateToProps)(PrivateRoute);