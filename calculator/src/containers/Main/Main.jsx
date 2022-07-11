import React from 'react'

import PropsType from 'prop-types'

import { StyledMain } from './components'

export const Main = ({ children }) => {
  return <StyledMain>{children}</StyledMain>
}

Main.PropsType = {
  children: PropsType.element,
}
