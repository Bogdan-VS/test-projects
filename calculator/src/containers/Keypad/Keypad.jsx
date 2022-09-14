import React, { lazy, useEffect, useCallback } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { StyledKeypad } from './components'

import { actionCreatorList } from '@/store/actions/actionCreators'

import { commands, BUTTONS_MAP } from '@/constants/buttons'
import {
  changeSign,
  checkUncorrectMessage,
  searchOperations,
} from '@/utils/searchOperations'

import {
  Calculator,
  AddInputValue,
  CalcExp,
  SwitchSign,
  Equal,
  ClearResult,
  FullClearResult,
} from '@/utils/calculate'

const CalcBtn = lazy(() => import('@/components/calcBtn'))

const calc = new Calculator()

export const Keypad = () => {
  const {
    inputValue,
    currentResult,
    currentHistory,
    isSign,
  } = useSelector(state => state.calculator)

  const dispatch = useDispatch()

  const updateData = () => {
    dispatch(
      actionCreatorList.addCurrentResultCreator(calc.inputValue),
    )
  }

  const sumValue = useCallback(
    value => () => {
      switch (value) {
        case commands.CLEAR:
          calc.executeCommand(new ClearResult())
          updateData()
          break
        case commands.FULL_CLEAR:
          calc.executeCommand(new FullClearResult())
          dispatch(actionCreatorList.clearInputValueCreator())
          updateData()
          break
        case commands.SIGN:
          calc.executeCommand(new SwitchSign(isSign))
          updateData()
          dispatch(
            actionCreatorList.changeExpCreator(
              changeSign(inputValue),
            ),
          )
          dispatch(actionCreatorList.switchSignCreator())
          break
        case commands.EQUAL:
          calc.executeCommand(new Equal())
          updateData()
          dispatch(
            actionCreatorList.addCurrentHistoryCreator(
              inputValue,
            ),
          )
          break
        default:
          calc.executeCommand(new AddInputValue(value))

          if (searchOperations(value, calc.inputValue)) {
            calc.executeCommand(new CalcExp())
          }

          updateData()
          dispatch(actionCreatorList.inputValueCreator(value))
          dispatch(actionCreatorList.resetSignCreator())
      }
    },
    [dispatch, isSign, inputValue],
  )

  useEffect(() => {
    if (checkUncorrectMessage(currentResult)) {
      calc.executeCommand(
        new AddInputValue(currentHistory.at(-1)),
      )

      setTimeout(() => {
        dispatch(
          actionCreatorList.addCurrentResultCreator(
            calc.inputValue,
          ),
        )
      }, 2000)
    }
  })

  const btnCollection = BUTTONS_MAP.map(value => {
    return (
      <CalcBtn
        key={value}
        name={value}
        onClick={sumValue(value)}
      />
    )
  })

  return <StyledKeypad>{btnCollection}</StyledKeypad>
}
