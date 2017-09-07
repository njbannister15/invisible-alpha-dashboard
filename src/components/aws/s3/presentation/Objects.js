import React from 'react';
import {Link} from 'react-router-dom'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {Route, Switch} from 'react-router-dom'
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

const selectRowProp = {
  mode: 'checkbox',
  clickToSelect: true // enable click to select
};

export default class S3Objects extends React.Component {

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
          noDataText: 'No Data'
        }}
        data={this.props.objects}
        selectRow={selectRowProp}>
        <TableHeaderColumn
          dataFormat={this.nameFormatter}
          dataField='Key'
          isKey={true}
          dataSort={true}>Name</TableHeaderColumn>
        <TableHeaderColumn dataField='LastModified'>Last Modified</TableHeaderColumn>
        <TableHeaderColumn dataField='Size'>Size</TableHeaderColumn>
        <TableHeaderColumn dataField='StorageClass'>Storage class</TableHeaderColumn>
      </BootstrapTable>

    );
  }
}