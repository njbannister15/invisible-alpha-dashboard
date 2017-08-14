import React from 'react'
import NavMenuItem from './NavMenuItem'

export default class SmartMenuList extends React.Component {
  
  render() {
    const { items, closedSign, openedSign, ...p } = this.props;

    return (
      <ul {...p}>
        {items.map((item) => {
          return <NavMenuItem sign={closedSign} expanded={true} item={item}  key={item._id} />
        })}
      </ul>
    )
  }
}