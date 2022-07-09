import React, { lazy, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { StyledKeypad } from './components'

import {
  inputValueCreator,
  addResultCreator,
  fullClearCreator,
  clearCreator,
  clearResultCreator,
} from '@/store/actionCreators'

import { calculate, tokenize } from '@/utils/calcOperations'
import { calcMessage } from '@/constants/message'
import { btnValues } from '@/constants/buttons'
import {
  clear,
  equal,
  fullClear,
} from '@/constants/calcBtn'

const CalcBtn = lazy(() => import('@/components/calcBtn'))

const { errorValue, errorExpression } = calcMessage

export const Keypad = () => {
  const { initValue, result } = useSelector(
    state => state.calculator,
  )

  const dispatch = useDispatch()

  const sumValue = useCallback(
    value => {
      switch (value) {
        case clear:
          dispatch(clearCreator())
          break
        case fullClear:
          dispatch(fullClearCreator())
          break
        case equal:
          dispatch(
            addResultCreator(
              calculate(tokenize(initValue)),
            ),
          )
          break
        default:
          dispatch(inputValueCreator(value))
      }
    },
    [dispatch, initValue],
  )

  useEffect(() => {
    if (
      result === errorValue ||
      result === errorExpression
    ) {
      setTimeout(() => {
        dispatch(clearResultCreator())
      }, 2000)
    } else if (+result) {
      dispatch(inputValueCreator(result))
      dispatch(clearResultCreator())
    }
  }, [dispatch, result])

  const btnCollection = btnValues.map(value => {
    return (
      <CalcBtn
        key={value}
        name={value}
        onClick={() => sumValue(value)}
      />
    )
  })

  return <StyledKeypad>{btnCollection}</StyledKeypad>
}
