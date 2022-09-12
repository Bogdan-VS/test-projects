import React, { Component } from 'react'

import PropType from 'prop-types'

import { StyledHeaderButton } from './components'

export class HeaderButtonClass extends Component {
  render() {
    const { name } = this.props

    return <StyledHeaderButton>{name}</StyledHeaderButton>
  }
}

HeaderButtonClass.propType = {
  name: PropType.string,
}
