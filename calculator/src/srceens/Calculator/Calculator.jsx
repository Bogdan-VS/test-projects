import History from '@/components/History'
import React, { lazy } from 'react'

import { CalculatorStyles } from './components'

const Display = lazy(() => import('@/components/Display'))
const Keypad = lazy(() => import('@/containers/Keypad'))

export const Calculator = () => {
  return (
    <React.Fragment>
      <CalculatorStyles>
        <Display />
        <Keypad />
      </CalculatorStyles>
      <History />
    </React.Fragment>
  )
}
