import React from 'react'
import Header from '../containers/HeaderContainer'
import Navigation from '../../navigation/components/Navigation'
import Ribbon from '../../ribbon/presentation/Ribbon'

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        
        <Header />
        
        <Navigation/>
        <div id="main" role="main">
          <Ribbon />
          {this.props.children}
        </div>
                
        {/*
        <Footer />
        <Shortcut />
        */}

      </div>
    )
  }
}
