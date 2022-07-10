import React, { Component } from 'react'

import { connect } from 'react-redux'

import { StyledClearAllHistory } from './components'

import { clearAllHistoryCreator } from '@/store/actionCreators'

class ClearAllHistory extends Component {
  clearHistory = () => this.props.clearAllHistoryCreator()

  render() {
    return (
      <StyledClearAllHistory
        onClick={() => this.clearHistory()}>
        Clear all history
      </StyledClearAllHistory>
    )
  }
}

const mapStateToProps = state => {
  return { calculator: state.calculator }
}

const mapDispatchToProps = () => {
  return {
    clearAllHistoryCreator,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps(),
)(ClearAllHistory)
