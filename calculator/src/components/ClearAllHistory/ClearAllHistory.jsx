import React from 'react'

import { useDispatch } from 'react-redux'

import { StyledClearAllHistory } from './components'

import { actionCreatorList } from '@/store/actions/actionCreators'

export const ClearAllHistory = () => {
  const dispatch = useDispatch()

  const handleClearHistory = () =>
    dispatch(
      actionCreatorList.clearAllHistoryCreator(),
    )

  return (
    <StyledClearAllHistory
      onClick={handleClearHistory}>
      Clear all history
    </StyledClearAllHistory>
  )
}
