import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import SmallBreadcrumbs from "../presentation/SmallBreadcrumbs"

class BreadcrumbsContainer extends React.Component {

  render() {
    return <SmallBreadcrumbs crumbs={this.props.crumbs} />
  }
}

const mapStateToProps = (state, ownProps) => {
  let route = ownProps.location.pathname;
  let split = route.split('/').filter(x => x);
  let crumbs = [{
    to: '/',
    text: 'Home'
  }];
  let link = '';
  split.forEach((element) => {
    link += '/' + element;
    crumbs.push({
      to: link,
      text: element.charAt(0).toUpperCase() + element.slice(1)
    })
  }, this);
  return { crumbs }
};

export default withRouter(connect(mapStateToProps)(BreadcrumbsContainer))

