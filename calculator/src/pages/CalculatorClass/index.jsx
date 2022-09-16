import React, { Component } from 'react'

import { connect } from 'react-redux'

import PropsType from 'prop-types'

import DisplayClass from '@/components/DisplayClass'
import KeypadClass from '@/containers/KeypadClass'
import HistoryClass from '@/containers/HistoryClass'

import { actionCreatorList } from '@/store/actions/actionCreators'

import {
  StyledCalculator,
  StyledSwitchHistory,
  StyledWrapper,
} from '../Calculator/components'

class CalculatorClass extends Component {
  handleSwitchHistory = () => {
    this.props.toggleHistory()
  }

  render() {
    return (
      <StyledWrapper isHistoryOpen={this.props.isHistoryOpen}>
        <StyledCalculator>
          <StyledSwitchHistory
            onClick={this.handleSwitchHistory}>
            History
          </StyledSwitchHistory>
          <DisplayClass />
          <KeypadClass />
        </StyledCalculator>
        <HistoryClass />
      </StyledWrapper>
    )
  }
}

CalculatorClass.propsType = {
  isHistoryOpen: PropsType.bool,
}

const mapStateToProps = state => ({
  isHistoryOpen: state.calculator.isHistoryOpen,
})

const mapDispatchToProps = () => ({
  toggleHistory: actionCreatorList.toggleHistory,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps(),
)(CalculatorClass)
