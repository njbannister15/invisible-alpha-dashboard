import React from 'react';

export default class S3Common extends React.Component {

  render() {
    return (
      <div className="row">

        <div className=" col-md-12">
          <a onClick={this.props.onUploadClick} className="btn btn-default">
            <i className="fa fa-pencil-square-o"></i>
            Upload</a>
        </div>
        <div className=" col-md-12">
          <br/>
        </div>

        <div className="col-md-12">
          {this.props.children}
        </div>

      </div>
    );
  }

}
