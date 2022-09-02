import React, {
  lazy,
  useEffect,
  useCallback,
} from 'react'

import {
  useDispatch,
  useSelector,
} from 'react-redux'

import { StyledKeypad } from './components'

import { actionCreatorList } from '@/store/actionCreators'

import {
  calculate,
  tokenize,
} from '@/utils/calcOperations'
import { calcMessage } from '@/constants/message'
import {
  CLEAR,
  EQUAL,
  FULL_CLEAR,
  BUTTONS_MAP,
} from '@/constants/buttons'

const CalcBtn = lazy(() =>
  import('@/components/calcBtn'),
)

const {
  errorValue,
  errorExpression,
} = calcMessage

export const Keypad = () => {
  const { initValue, result } = useSelector(
    state => state.calculator,
  )

  const dispatch = useDispatch()

  const sumValue = useCallback(
    value => () => {
      switch (value) {
        case CLEAR:
          dispatch(
            actionCreatorList.clearCreator(),
          )
          break
        case FULL_CLEAR:
          dispatch(
            actionCreatorList.fullClearCreator(),
          )
          break
        case EQUAL:
          dispatch(
            actionCreatorList.addResultCreator(
              calculate(tokenize(initValue)),
            ),
          )
          break
        default:
          dispatch(
            actionCreatorList.inputValueCreator(
              value,
            ),
          )
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
        dispatch(
          actionCreatorList.clearResultCreator(),
        )
      }, 2000)
    } else if (+result) {
      dispatch(
        actionCreatorList.inputValueCreator(
          result,
        ),
      )
      dispatch(
        actionCreatorList.clearResultCreator(),
      )
    }
  }, [dispatch, result])

  const btnCollection = BUTTONS_MAP.map(value => {
    return (
      <CalcBtn
        key={value}
        name={value}
        onClick={sumValue(value)}
      />
    )
  })

  return (
    <StyledKeypad>{btnCollection}</StyledKeypad>
  )
}
