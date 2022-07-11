import React, { useCallback } from 'react'

import { useDispatch } from 'react-redux'

import PropType from 'prop-types'

import { CLEAR_HISTORY } from '@/constants/buttons'
import {
  clearHistoryCreator,
  toggleHistoryCreator,
} from '@/store/actionCreators'

import { StyledControlBtn } from './components'

export const ControlPanelBtn = ({ name }) => {
  const dispatch = useDispatch()

  const btnHandler = useCallback(() => {
    name === CLEAR_HISTORY
      ? dispatch(clearHistoryCreator())
      : dispatch(toggleHistoryCreator())
  })

  return (
    <StyledControlBtn onClick={btnHandler}>
      {name}
    </StyledControlBtn>
  )
}

ControlPanelBtn.PropType = {
  name: PropType.string,
}
