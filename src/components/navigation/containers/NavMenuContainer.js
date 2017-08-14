import { connect } from 'react-redux'

import NavMenu from '../components/NavMenu'

import {navigationInit} from '../../../redux/navigation/actions'

function addId(item) {
  
  if (item.items) {
    item.items = item.items.map(addId)
  }

  if (!item._id) {
    item._id = Math.random().toString(36).slice(2)
  }
  
  return item
}

const navItems = require('../../../config/navigation.json').items.map(addId);

const mapStateToProps = (state) => ({
  navItems: navItems
})

const mapDispatchToProps = {
  initialize: navigationInit
}

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu);