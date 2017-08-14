import React from 'react';
import {Link} from 'react-router-dom'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {Route, Switch} from 'react-router-dom'
import S3Objects from './Objects'
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
const selectRowProp = {
  mode: 'checkbox',
  clickToSelect: true // enable click to select
};

export default class S3Buckets extends React.Component {

  nameFormatter(cell, row) {    
    return <Link to={'/dashboard/aws/s3/' + cell}>{cell}</Link>;
  }

  render() {

    return (
      <BootstrapTable
        ref='table'
        options={this.props.isFetching
        ? {
          noDataText: 'Fetching... '
        }
        : {
          noDataText: 'No Buckets'
        }}
        data={this.props.buckets}
        selectRow={selectRowProp}
        >
        <TableHeaderColumn
          dataFormat={this.nameFormatter}
          dataField='Name'
          isKey={true}
          dataSort={true}>Bucket Name</TableHeaderColumn>
        <TableHeaderColumn dataField='CreationDate'>Date Created</TableHeaderColumn>
      </BootstrapTable>

    );
  }
}
