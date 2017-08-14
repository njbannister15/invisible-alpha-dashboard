import React from 'react'


export default class MinifyMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minified: false
    }
    this.toggle = this.toggle.bind(this);
  }

  componentDidUpdate() {    
    document.body.classList.toggle('minified', this.state.minified);
  }

  toggle(e) {    
    this.setState((prevState) => {
      return { minified: !prevState.minified }
    });

  }
  render() {
    return (
      <span className="minifyme" data-action="minifyMenu" onClick={this.toggle}>
        <i className="fa fa-arrow-circle-left hit" />
      </span>
    )
  }
}