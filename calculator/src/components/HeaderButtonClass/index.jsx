import React, { Component } from 'react'

import PropType from 'prop-types'

import { StyledHeaderButton } from '../HeaderButton/components'

class HeaderButtonClass extends Component {
  render() {
    const { name } = this.props

    return <StyledHeaderButton>{name}</StyledHeaderButton>
  }
}

HeaderButtonClass.propType = {
  name: PropType.string,
}

export default HeaderButtonClass
