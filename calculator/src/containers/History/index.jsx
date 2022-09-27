import React, { useMemo } from 'react'

import { useSelector } from 'react-redux'

import uniqid from 'uniqid'

import ControlPanel from '../ControlPanel'

import {
  ContentItemStyled,
  ContentStyled,
  HistoryStyled,
  StyledFullHistory,
  TitleStyled,
} from './components'

const History = () => {
  const {
    currentHistory = [],
    isFullHistoryOpen,
    fullHistory,
  } = useSelector(state => state.calculator)

  const expressionCollection = useMemo(
    () =>
      currentHistory.map((value, index) => {
        return (
          <ContentItemStyled
            className="expCollection"
            key={uniqid()}>
            {value}
          </ContentItemStyled>
        )
      }),
    [currentHistory],
  )

  const fullExpressionCollection = useMemo(
    () =>
      fullHistory.map((value, index) => {
        return (
          <ContentItemStyled key={uniqid()}>
            {value}
          </ContentItemStyled>
        )
      }),
    [fullHistory],
  )

  return (
    <HistoryStyled>
      <ControlPanel />
      <TitleStyled>History</TitleStyled>
      <ContentStyled>{expressionCollection}</ContentStyled>
      <StyledFullHistory isOpen={isFullHistoryOpen}>
        {fullExpressionCollection}
      </StyledFullHistory>
    </HistoryStyled>
  )
}

export default History
