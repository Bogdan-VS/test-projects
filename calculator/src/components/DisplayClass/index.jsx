import React, { Component } from 'react'

import { connect } from 'react-redux'

import PropType from 'prop-types'

import { StyledDisplay, StyledWrapperDisplay } from '../Display/components'

class DisplayClass extends Component {
  render() {
    const { currentResult } = this.props

    return (
      <StyledWrapperDisplay>
        <StyledDisplay>{currentResult}</StyledDisplay>
      </StyledWrapperDisplay>
    )
  }
}

DisplayClass.propType = {
  currentResult: PropType.string,
}

const mapStateToProps = state => ({
  currentResult: state.calculator.currentResult,
})

export default connect(mapStateToProps)(DisplayClass)
