import React, { useCallback } from 'react'

import { useDispatch } from 'react-redux'

import PropType from 'prop-types'

import { CLEAR_HISTORY } from '@/constants/buttons'
import { actionCreatorList } from '@/store/actionCreators'

import { StyledControlBtn } from './components'

export const ControlPanelBtn = React.memo(
  ({ name }) => {
    const dispatch = useDispatch()

    const btnHandler = useCallback(() => {
      name === CLEAR_HISTORY
        ? dispatch(
            actionCreatorList.clearHistoryCreator(),
          )
        : dispatch(
            actionCreatorList.toggleHistoryCreator(),
          )
    }, [name])

    return (
      <StyledControlBtn onClick={btnHandler}>
        {name}
      </StyledControlBtn>
    )
  },
)

ControlPanelBtn.propType = {
  name: PropType.string,
}
