import React from 'react'

import History from '@/containers/History'
import Display from '@/components/Display'
import Keypad from '@/containers/Keypad'

import {
  StyledCalculator,
  StyledWrapper,
} from './components'

export const Calculator = () => {
  return (
    <StyledWrapper>
      <StyledCalculator>
        <Display />
        <Keypad />
      </StyledCalculator>
      <History />
    </StyledWrapper>
  )
}
