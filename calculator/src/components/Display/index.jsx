import React from 'react'

import { useSelector } from 'react-redux'

import {
  StyledDisplay,
  StyledWrapperDisplay,
} from './components'

const Display = () => {
  const { currentResult } = useSelector(
    state => state.calculator,
  )

  return (
    <StyledWrapperDisplay>
      <StyledDisplay>{currentResult}</StyledDisplay>
    </StyledWrapperDisplay>
  )
}
export default Display
