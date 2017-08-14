import React from 'react'
import PropTypes from 'prop-types';
import NavMenuList from './NavMenuList'

export default class NavMenu extends React.Component {

  constructor(props) {
    super(props);
    this.defaults = {
      accordion: true,
      speed: 200,//config.menu_speed,
      closedSign: '',
      openedSign: ''
    };
  }

  componentWillMount() {
    this.props.initialize(this.props.navItems);
  }

  render() {
    return (
      this.props.navItems ?
        <NavMenuList items={this.props.navItems} closedSign={this.defaults.closedSign} openedSign={this.defaults.openedSign}/>
        : this.props.children
    )
  }
}

NavMenu.propTypes = {
  accordion: PropTypes.bool,
  speed: PropTypes.number,
  closedSign: PropTypes.string,
  openedSign: PropTypes.string,
  initialize: PropTypes.func.isRequired,
  navItems: PropTypes.array.isRequired
};