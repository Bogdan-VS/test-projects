import React from 'react'

import PropType from 'prop-types'

import { StyledHeaderButton } from './components'

const HeaderButton = ({ name }) => {
  return <StyledHeaderButton>{name}</StyledHeaderButton>
}

HeaderButton.propType = {
  name: PropType.string,
}

export default HeaderButton
