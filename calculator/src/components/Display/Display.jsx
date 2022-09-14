import React from 'react'

import { useSelector } from 'react-redux'

import {
  StyledDisplay,
  StyledWrapperDisplay,
} from './components'

export const Display = () => {
  const { currentResult } = useSelector(
    state => state.calculator,
  )

  return (
    <StyledWrapperDisplay>
      <StyledDisplay>{currentResult}</StyledDisplay>
    </StyledWrapperDisplay>
  )
}
