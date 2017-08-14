import React from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'
//import Msg from '../../i18n/Msg'

import SmartMenuList from './NavMenuList'

export default class SmartMenuItem extends React.Component {

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  render() {
    const item = this.props.item;

    /*
        const title = !item.parent
          ? <span className="menu-item-parent"><Msg phrase={item.title}/></span>
          : <Msg phrase={item.title}/>;
          */

    var divStyle = {
      color: 'white',
      backgroundColor: 'red'
    };

    const title = !item.parent
      ? <span className="menu-item-parent">
          <span >{item.title}</span>
        </span>
      : <span style={divStyle}>{item.title}</span>;

    const badge = item.badge
      ? <span className={item.badge.class}>{item.badge.label || ''}</span>
      : null;

    const smartMenuListStyle = this.props.expanded
      ? {
        display: "block"
      }
      : {};

    const childItems = item.items
      ? <SmartMenuList style={smartMenuListStyle} items={item.items}/>
      : null;

    const collapse = childItems
      ? <b className='collapse-sign' key={item._id + 'b'}>
          {this.props.sign}
        </b>
      : null;

    let icon = null;
    if (item.icon.includes("custom-icon")) {
      icon = item.icon
        ? (item.counter
          ? <img className={item.icon}>
              <em>{item.counter}</em>
            </img>
          : <img className={item.icon}/>)
        : null;

    } else {
      icon = item.icon
        ? (item.counter
          ? <i className={item.icon}>
              <em>{item.counter}</em>
            </i>
          : <i className={item.icon}/>)
        : null;
    }
    /*
        const liClassName = (item.route && this.context.router.isActive(item.route))
          ? 'active'
          : '';
          */

    const liClassName = (item.route === this.context.router.route.location.pathname)
      ? 'active'
      : '';

    const link = item.route
      ? <NavLink to={item.route} title={item.title} activeClassName="active">
          {icon}
          {title}
          {badge}
          {collapse}
        </NavLink>
      : <a href={item.href || '#'} onClick={this._handleClick} title={item.title}>
        {icon}
        {title}
        {badge}
        {collapse}
      </a>;

    return <li className={liClassName}>{link}{childItems}</li>

  }
}
