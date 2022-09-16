import React from 'react'

import { useSelector } from 'react-redux'

import { calcMessage } from '@/constants/message'

import {
  StyledDisplay,
  StyledWrapperDisplay,
} from './components'

const Display = () => {
  const { initValue, result } = useSelector(
    state => state.calculator,
  )

  const { errorValue, errorExpression } = calcMessage

  const currentValue =
    result === errorValue || result === errorExpression
      ? result
      : initValue

  return (
    <StyledWrapperDisplay>
      <StyledDisplay>{currentValue}</StyledDisplay>
    </StyledWrapperDisplay>
  )
}

export default Display
