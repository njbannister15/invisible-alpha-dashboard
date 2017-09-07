import React from 'react';
import {Link} from 'react-router-dom'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {Route, Switch} from 'react-router-dom'
import S3Objects from '../containers/ObjectsContainer'
import S3Buckets from '../containers/BucketsContainer'

import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

export default class S3Home extends React.Component {

  render() {
    return (
      <div id="content">
        <div className="row">
          <article className="col-sm-10">
            <Switch>
              <Route exact path="/dashboard/aws/s3" component={S3Buckets}/>
              <Route path="/dashboard/aws/s3/:name" component={S3Objects}/>              
            </Switch>
          </article>
        </div>
      </div>
    );
  }
}