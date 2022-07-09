import React from 'react'
import { useSelector } from 'react-redux'

import { calcMessage } from '@/constants/message'

import {
  StyledDisplay,
  StyledWrapperDisplay,
} from './components'

export const Display = () => {
  const { initValue, result } = useSelector(
    state => state.calculator,
  )

  return (
    <StyledWrapperDisplay>
      <StyledDisplay>
        {result === calcMessage.errorValue ||
        result === calcMessage.errorExpression
          ? result
          : initValue}
      </StyledDisplay>
    </StyledWrapperDisplay>
  )
}
