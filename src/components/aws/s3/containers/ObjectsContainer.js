import React from 'react'

import {connect} from 'react-redux'
import Objects from "../presentation/Objects"
import {getObjects} from "../../../../redux/aws/s3/actions"

class ObjectsContainer extends React.Component {

  componentDidMount() {
    this
      .props
      .dispatch(getObjects(this.props.match.params.name));
  }

  render() {

    let isFetching = this
      .props
      .s3
      .get("isFetching");
    let objects = this
      .props
      .s3
      .get("objects");
    let data = [];

    if (!isFetching && objects) {
      data = objects.Contents;
    }

    return <Objects isFetching={isFetching} objects={data}/>
  }
}

const mapStateToProps = (state) => {
  return {s3: state.aws.s3}
};

export default connect(mapStateToProps)(ObjectsContainer);