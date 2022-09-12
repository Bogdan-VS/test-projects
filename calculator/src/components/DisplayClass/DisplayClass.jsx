import React, { Component } from 'react'

import { connect } from 'react-redux'

import PropType from 'prop-types'

import { calcMessage } from '@/constants/message'

import {
  StyledDisplay,
  StyledWrapperDisplay,
} from './components'

class DisplayClass extends Component {
  render() {
    const { result, initValue } = this.props

    const {
      errorValue,
      errorExpression,
    } = calcMessage

    const currentValue =
      this.props.result === errorValue ||
      result === errorExpression
        ? result
        : initValue

    return (
      <StyledWrapperDisplay>
        <StyledDisplay>
          {currentValue}
        </StyledDisplay>
      </StyledWrapperDisplay>
    )
  }
}

DisplayClass.propType = {
  result: PropType.string,
  initValue: PropType.string,
}

const mapStateToProps = state => ({
  result: state.calculator.result,
  initValue: state.calculator.initValue,
})

export default connect(mapStateToProps)(
  DisplayClass,
)
