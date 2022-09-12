import React from 'react'

import PropType from 'prop-types'

import { StyledHeaderButton } from './components'

export const HeaderButton = ({ name }) => {
  return <StyledHeaderButton>{name}</StyledHeaderButton>
}

HeaderButton.propType = {
  name: PropType.string,
}
