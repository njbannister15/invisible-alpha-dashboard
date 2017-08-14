
import React from 'react';
import Aws from '../components/aws/presentation/AwsHome'
import Layout from '../components/common/presentation/Layout'
import { Route} from 'react-router-dom'

export default class Dashboard extends React.Component {

  render() {

    /*
    let isAuthenticated = this.props.isAuthenticated;
    if (!isAuthenticated) {
      return <Redirect
        to={{
          pathname: '/login',
          state: {
            from: this.props.location
          }
        }} />
    }
    */

    return (
        <Layout>
          <Route path="/dashboard/aws" component={Aws} />         
        </Layout>
    )
  }
}

/*
function mapStateToProps(state) {
  return { isAuthenticated: state.user.auth.get('isAuthenticated') }
}

export default connect(mapStateToProps)(Dashboard);
*/