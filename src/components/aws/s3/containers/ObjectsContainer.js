import React from 'react'

import {connect} from 'react-redux'
import Objects from "../presentation/Objects"
import {getObjects, uploadFile} from "../../../../redux/aws/s3/actions"
import {withRouter} from 'react-router-dom'

class ObjectsContainer extends React.Component {

  constructor(props) {
    super(props);
    this.uploadFile = this
      .uploadFile
      .bind(this);
  }

  uploadFile(data) {
    console.log(this.props.s3.objects.Name);
    console.log(this.props);
    let bucket = this.props.s3.objects.Name;
    this.props.dispatch(uploadFile(bucket, data.file));
  }

  componentDidMount() {
    this
      .props
      .dispatch(getObjects(this.props.match.params.name));
  }

  render() {
    let isFetching = this.props.s3.isFetching;
    let objects = this.props.s3.objects;
    let data = [];

    if (!isFetching && objects) {
      data = objects.Contents;
    }

    return (<Objects uploadFile={this.uploadFile} isFetching={isFetching} objects={data}/>);
  }
}

const mapStateToProps = (state) => {
  return {
    s3: state
      .aws
      .s3
      .toJSON()
  }
};

export default withRouter(connect(mapStateToProps)(ObjectsContainer));