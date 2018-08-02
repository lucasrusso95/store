import React, { Component } from 'react'
import PropTypes from 'prop-types'

import DataLayerApolloWrapper from './components/DataLayerApolloWrapper'

export default class HomeContextProvider extends Component {
  static propTypes = {
    children: PropTypes.element,
  }

  getData = () => {  
    return [{
      accountName: global.__RUNTIME__.account,
      pageTitle: document.title,
      pageUrl: location.href,
      pageCategory: 'Home'
    }]
  }

  render() {
    return (
      <DataLayerApolloWrapper getData={this.getData}>
        {this.props.children}
      </DataLayerApolloWrapper>
    )
  }
}
