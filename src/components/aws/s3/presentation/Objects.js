import React from 'react';
import {Link} from 'react-router-dom'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {Route, Switch} from 'react-router-dom'
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import S3Common from './S3Common'
import UploadFileForm from "../../../forms/UploadFileForm"
import {Modal} from 'react-bootstrap'
import PropTypes from 'prop-types'

import Dropzone from 'react-dropzone'

const selectRowProp = {
  mode: 'checkbox',
  clickToSelect: true // enable click to select
};

export default class S3Objects extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showUploadDialog: false,
      files: [] 
    }

    this.openDialog = this
      .openDialog
      .bind(this);

    this.closeDialog = this
      .closeDialog
      .bind(this);

    this.handleSubmit = this
      .handleSubmit
      .bind(this);
  }


  nameFormatter(cell, row) {
    return <Link to={'/dashboard/aws/s3/' + cell}>{cell}</Link>;
  }

  openDialog() {
    this.setState({showUploadDialog: true})
  }

  closeDialog() {
    this.setState({showUploadDialog: false})
  }

  handleSubmit(data) {   
    this.props.uploadFile(data);
    this.closeDialog();
  }

  render() {
    let upload = this.state.showUploadDialog
      ? <ModalInstance onDrop={this.onDrop} handleSubmit={this.handleSubmit} onCancel={this.closeDialog}/>
      : null;

    return (
      <S3Common onUploadClick={this.openDialog}>
        {upload}
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
      </S3Common>

    );
  }
}

S3Objects.propTypes = {
  uploadFile: PropTypes.func.isRequired  
};

const ModalInstance = (props) => {
  return (
    <div className="static-modal">
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Upload File</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>            
            <UploadFileForm handleSubmit={props.handleSubmit} onCancel={props.onCancel}/>            
          </div>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
}
