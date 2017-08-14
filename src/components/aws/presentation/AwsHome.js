import React from 'react';
import {Route, Switch} from 'react-router-dom'
import S3Home from '../s3/presentation/Home'
export default class AwsHome extends React.Component {

  render() {
    return (
      <div id="content">

        <div className="row">
          <Switch>          
            <Route path="/dashboard/aws/s3" component={S3Home}/>
          </Switch>
        </div>
      </div>
    );

  }
}