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

import { actionCreatorList } from '@/store/actions/actionCreators'

import {
  calculate,
  tokenize,
} from '@/utils/calcOperations'
import { calcMessage } from '@/constants/message'
import {
  commands,
  BUTTONS_MAP,
  OPERATIONS,
} from '@/constants/buttons'
import {
  changeSign,
  searchOperations,
} from '@/utils/searchOperations'

const CalcBtn = lazy(() =>
  import('@/components/calcBtn'),
)

const {
  errorValue,
  errorExpression,
} = calcMessage

export const Keypad = () => {
  const {
    initValue,
    result,
    isSign,
    currentExpression,
  } = useSelector(state => state.calculator)

  const dispatch = useDispatch()

  const sumValue = useCallback(
    value => () => {
      switch (value) {
        case commands.CLEAR:
          dispatch(
            actionCreatorList.clearCreator(),
          )
          break
        case commands.FULL_CLEAR:
          dispatch(
            actionCreatorList.fullClearCreator(),
          )
          break
        case commands.SIGN:
          dispatch(
            actionCreatorList.switchSignCreator(),
          )
          dispatch(
            actionCreatorList.changeHistoryCreator(
              changeSign(
                currentExpression,
                isSign,
              ),
            ),
          )
          dispatch(
            actionCreatorList.changeExpCreator(
              changeSign(initValue, isSign),
            ),
          )
          break
        case commands.EQUAL:
          dispatch(
            actionCreatorList.countExpCreator(
              calculate(tokenize(initValue)),
            ),
          )
          break
        default:
          if (
            result !== errorValue ||
            result !== errorExpression
          ) {
            dispatch(
              actionCreatorList.inputValueCreator(
                value,
              ),
            )

            if (OPERATIONS.includes(value))
              dispatch(
                actionCreatorList.resetSignCreator(),
              )

            if (
              searchOperations(value, initValue)
            ) {
              dispatch(
                actionCreatorList.addResultCreator(
                  calculate(tokenize(initValue)),
                ),
              )
            }
          }
      }
    },
    [
      dispatch,
      initValue,
      currentExpression,
      isSign,
    ],
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
    } else if (+result || result === '0') {
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
