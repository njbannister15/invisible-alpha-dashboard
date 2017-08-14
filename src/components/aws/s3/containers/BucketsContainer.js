import React from 'react'

import {connect} from 'react-redux'
import Buckets from "../presentation/Buckets"
import {getBuckets} from "../../../../redux/aws/s3/actions"

class BucketsContainer extends React.Component {

  componentDidMount() {
    this
      .props
      .dispatch(getBuckets());
  }

  render() {

    let isFetching = this
      .props
      .s3
      .get("isFetching");
    let buckets = this
      .props
      .s3
      .get("buckets");
    let data = [];

    if (!isFetching && buckets) {
      data = buckets.Buckets;
    }

    return <Buckets isFetching={isFetching} buckets={data}/>
  }
}

const mapStateToProps = (state) => {
  return {s3: state.aws.s3}
};

export default connect(mapStateToProps)(BucketsContainer);