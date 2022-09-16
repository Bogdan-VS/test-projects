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
    expression = [],
    isFullHistoryOpen,
    historyOfExpression,
  } = useSelector(state => state.calculator)

  const expressionCollection = useMemo(
    () =>
      expression.map((value, index) => {
        return (
          <ContentItemStyled
            className="expCollection"
            key={uniqid()}>
            {value}
          </ContentItemStyled>
        )
      }),
    [expression],
  )

  const fullExpressionCollection = useMemo(
    () =>
      historyOfExpression.map((value, index) => {
        return (
          <ContentItemStyled key={uniqid()}>
            {value}
          </ContentItemStyled>
        )
      }),
    [historyOfExpression],
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
