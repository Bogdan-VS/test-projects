import React, { Component } from 'react'

import { connect } from 'react-redux'

import uniqid from 'uniqid'

import PropsType from 'prop-types'

import ControlPanelClass from '../ControlPanelClass'

import {
  ContentItemStyled,
  ContentStyled,
  HistoryStyled,
  StyledFullHistory,
  TitleStyled,
} from './components'

class HistoryClass extends Component {
  render() {
    const {
      expression = [],
      historyOfExpression,
      isFullHistoryOpen,
    } = this.props

    const expressionCollection = expression.map(
      (value, index) => {
        return (
          <ContentItemStyled
            className="expCollection"
            key={uniqid()}>
            {value}
          </ContentItemStyled>
        )
      },
    )

    const fullExpressionCollection = historyOfExpression.map(
      (value, index) => {
        return (
          <ContentItemStyled key={uniqid()}>
            {value}
          </ContentItemStyled>
        )
      },
    )

    return (
      <HistoryStyled>
        <ControlPanelClass />
        <TitleStyled>History</TitleStyled>
        <ContentStyled>
          {expressionCollection}
        </ContentStyled>
        <StyledFullHistory
          isOpen={isFullHistoryOpen}>
          {fullExpressionCollection}
        </StyledFullHistory>
      </HistoryStyled>
    )
  }
}

HistoryClass.propsType = {
  expression: PropsType.array,
  isFullHistoryOpen: PropsType.bool,
  historyOfExpression: PropsType.array,
}

const mapStateToProps = state => ({
  expression: state.calculator.expression,
  isFullHistoryOpen:
    state.calculator.isFullHistoryOpen,
  historyOfExpression:
    state.calculator.historyOfExpression,
})

export default connect(mapStateToProps)(
  HistoryClass,
)
