import React, { Component } from 'react'
import { connect } from 'react-redux'

import PropTypes from 'prop-types'

import { StyledClearAllHistory } from '../ClearAllHistory/components'
import { actionCreatorList } from '@/store/actions/actionCreators'

class ClearAllHistoryClass extends Component {
  handleClearHistory = () => this.props.clearAllHistoryCreator()

  render() {
    return (
      <StyledClearAllHistory onClick={this.handleClearHistory}>
        Clear all history
      </StyledClearAllHistory>
    )
  }
}

ClearAllHistoryClass.propTypes = {
  clearAllHistoryCreator: PropTypes.func,
}

const mapStateToProps = state => {
  return { calculator: state.calculator }
}

const mapDispatchToProps = () => {
  return {
    clearAllHistoryCreator:
      actionCreatorList.clearAllHistoryCreator,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps(),
)(ClearAllHistoryClass)
