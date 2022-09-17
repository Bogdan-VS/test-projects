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

const CalcBtn = lazy(() => import('@/components/CalcBtn'))

const calc = new Calculator()

const Keypad = () => {
  const {
    inputValue,
    currentResult,
    isSign,
    tempValue,
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
          dispatch(
            actionCreatorList.addTempValueCreator(
              calc.inputValue,
            ),
          )
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
            dispatch(
              actionCreatorList.addTempValueCreator(
                calc.inputValue,
              ),
            )
            calc.executeCommand(new CalcExp())
          }

          dispatch(actionCreatorList.inputValueCreator(value))
          updateData()
          dispatch(actionCreatorList.resetSignCreator())
      }
    },
    [dispatch, isSign, inputValue],
  )

  useEffect(() => {
    if (checkUncorrectMessage(currentResult)) {
      calc.executeCommand(new AddInputValue(tempValue))

      setTimeout(() => {
        dispatch(
          actionCreatorList.addCurrentResultCreator(tempValue),
        )
        dispatch(actionCreatorList.clearTempValueCreator())
      }, 2000)
    }
  }, [currentResult, tempValue])

  const btnCollection = BUTTONS_MAP.map(value => {
    return (
      <CalcBtn
        disabled={checkUncorrectMessage(currentResult)}
        key={value}
        name={value}
        onClick={sumValue(value)}
      />
    )
  })

  return <StyledKeypad>{btnCollection}</StyledKeypad>
}

export default Keypad
