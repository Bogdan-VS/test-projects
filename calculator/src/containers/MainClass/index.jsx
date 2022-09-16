import React, { Component } from 'react'

import PropsType from 'prop-types'

import { StyledMain } from '../Main/components'

class MainClass extends Component {
  render() {
    return <StyledMain>{this.props.children}</StyledMain>
  }
}

MainClass.propsType = {
  children: PropsType.element,
}

export default MainClass
