import React from 'react'

import { useLocation } from 'react-router-dom'

import PropType from 'prop-types'

import { StyledHeaderButton } from './components'

export const HeaderButton = ({
  name,
  className,
}) => {
  const location = useLocation()

  return (
    <StyledHeaderButton
      location={location.pathname}
      className={className}>
      {name}
    </StyledHeaderButton>
  )
}

HeaderButton.propType = {
  name: PropType.string,
  className: PropType.string,
}
