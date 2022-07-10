import React from 'react'

import { useSelector } from 'react-redux'

import ControlPanel from '../ControlPanel'

import {
  ContentItemStyled,
  ContentStyled,
  HistoryStyled,
  StyledFullHistory,
  TitleStyled,
} from './components'

export const History = () => {
  const {
    expression,
    isFullHistoryOpen,
    historyOfExpression,
  } = useSelector(state => state.calculator)

  const expressionCollection = expression.map(
    (value, index) => {
      return (
        <ContentItemStyled
          className="expCollection"
          key={`${value}${index}`}>
          {value}
        </ContentItemStyled>
      )
    },
  )

  const fullExpressionCollection = historyOfExpression.map(
    (value, index) => {
      return (
        <ContentItemStyled key={`${value}${index}`}>
          {value}
        </ContentItemStyled>
      )
    },
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
