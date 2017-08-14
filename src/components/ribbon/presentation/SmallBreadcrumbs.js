import React from 'react'
import { Link } from 'react-router-dom'

export default class SmallBreadcrumbs extends React.Component {
  render() {
    return (
      <ol className="breadcrumb">
        {
          this.props.crumbs.map((curr, index) => {
            return <li key={index}>
              <Link to={curr.to}>
                {curr.text}
              </Link>
            </li>;
          })
        }
      </ol>
    )
  }
}

SmallBreadcrumbs.defaultProps = {
  crumbs: [{
    to: '/',
    text: 'Home'
  }]
};