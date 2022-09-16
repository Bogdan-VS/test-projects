import React from 'react'

import PropsType from 'prop-types'

import { StyledMain } from './components'

const Main = ({ children }) => {
  return <StyledMain>{children}</StyledMain>
}

Main.propsType = {
  children: PropsType.element,
}

export default Main
