import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import History from '@/containers/History'
import Display from '@/components/Display'
import Keypad from '@/containers/Keypad'

import {
  StyledCalculator,
  StyledSwitchHistory,
  StyledWrapper,
} from './components'
import { actionCreatorList } from '@/store/actions/actionCreators'

const Calculator = () => {
  const dispatch = useDispatch()

  const { isHistoryOpen } = useSelector(
    state => state.calculator,
  )

  const handleSwitchHistory = () => {
    dispatch(actionCreatorList.toggleHistory())
  }

  return (
    <StyledWrapper isHistoryOpen={isHistoryOpen}>
      <StyledCalculator>
        <StyledSwitchHistory onClick={handleSwitchHistory}>
          History
        </StyledSwitchHistory>
        <Display />
        <Keypad />
      </StyledCalculator>
      <History />
    </StyledWrapper>
  )
}

export default Calculator
