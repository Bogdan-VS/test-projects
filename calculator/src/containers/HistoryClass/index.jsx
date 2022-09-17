import React, { Component } from 'react'

import { connect } from 'react-redux'

import uniqid from 'uniqid'

import PropsType from 'prop-types'

import ControlPanelClass from '../ControlPanelClass'

import { ContentItemStyled, ContentStyled, HistoryStyled, StyledFullHistory, TitleStyled } from '../History/components'

class HistoryClass extends Component {
  render() {
    const {
      currentHistory = [],
      fullHistory,
      isFullHistoryOpen,
    } = this.props

    const expressionCollection = currentHistory.map(
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

    const fullExpressionCollection = fullHistory.map(
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
        <ContentStyled>{expressionCollection}</ContentStyled>
        <StyledFullHistory isOpen={isFullHistoryOpen}>
          {fullExpressionCollection}
        </StyledFullHistory>
      </HistoryStyled>
    )
  }
}

HistoryClass.propsType = {
  currentHistory: PropsType.array,
  isFullHistoryOpen: PropsType.bool,
  fullHistory: PropsType.array,
}

const mapStateToProps = state => ({
  currentHistory: state.calculator.currentHistory,
  isFullHistoryOpen: state.calculator.isFullHistoryOpen,
  fullHistory: state.calculator.fullHistory,
})

export default connect(mapStateToProps)(HistoryClass)
