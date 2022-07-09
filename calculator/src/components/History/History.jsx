import React from 'react'
import { useSelector } from 'react-redux'
import {
  ContentItemStyled,
  ContentStyled,
  HistoryStyled,
  TitleStyled,
} from './components'

export const History = () => {
  const { expression } = useSelector(
    state => state.calculator,
  )

  const expressionCollection = expression.map(
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
      <TitleStyled>History</TitleStyled>
      <ContentStyled>{expressionCollection}</ContentStyled>
    </HistoryStyled>
  )
}
