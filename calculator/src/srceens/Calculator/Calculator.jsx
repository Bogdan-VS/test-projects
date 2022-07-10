import History from '@/containers/History'
import React, { lazy } from 'react'

import {
  StyledCalculator,
  StyledWrapper,
} from './components'

const Display = lazy(() => import('@/components/Display'))
const Keypad = lazy(() => import('@/containers/Keypad'))

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
