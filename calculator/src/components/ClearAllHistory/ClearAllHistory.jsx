import React, { Component } from 'react'

import { connect } from 'react-redux'

import PropTypes from 'prop-types'

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

ClearAllHistory.PropTypes = {
  clearAllHistoryCreator: PropTypes.func,
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
