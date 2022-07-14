import React, { Component } from 'react'

import { connect } from 'react-redux'

import PropsType from 'prop-types'

import { hasErrorCreator } from '@/store/actionCreators'
import {
  StyledErrorBoundary,
  StyledTitle,
} from './components'

class ErrorBoundary extends Component {
  componentDidCatch() {
    this.props.hasErrorCreator()
  }

  render() {
    return this.props.hasError ? (
      <StyledErrorBoundary>
        <StyledTitle>Oops, it is error</StyledTitle>
      </StyledErrorBoundary>
    ) : (
      this.props.children
    )
  }
}

ErrorBoundary.PropsType = {
  hasError: PropsType.string,
  hasErrorCreator: PropsType.func,
}

const mapStateToProps = state => {
  return { hasError: state.errorBoundary.hasError }
}

const mapDispatchToProps = () => {
  return {
    hasErrorCreator,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps(),
)(ErrorBoundary)
