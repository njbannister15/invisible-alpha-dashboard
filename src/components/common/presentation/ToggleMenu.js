import React from 'react'

export default class ToggleMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      menuOnTop: false,
      minified: false,
      hiddenMenu: false
    }
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentDidUpdate() {
    document.body.classList.remove('minified')
    document.body.classList.toggle('hidden-menu', this.state.hiddenMenu);
  }

  toggleMenu(e) {

    this.setState((prev) => {
      return {
        menuOnTop: !prev.menuOnTop,
        hiddenMenu: !prev.hiddenMenu,
      }
    })

    e.preventDefault();
  }
  render() {
    return (
      <div id="hide-menu" className={this.props.className}>
        <span>
          <a onClick={this.toggleMenu} title="Collapse Menu"><i className="fa fa-reorder" /></a>
        </span>
      </div>

    )
  }
}