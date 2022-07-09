import React, { Component } from 'react'
import { connect } from 'react-redux'

import { hasErrorCreator } from '@/store/actionCreators'
import {
  StyledErrorBoundary,
  StyledTitle,
} from './components'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    console.log(ErrorBoundary)
  }

  componentDidCatch() {
    this.props.hasErrorCreator()
  }

  // static getDerivedStateFromError() {
  //   console.log(1)
  //   console.log(ErrorBoundary, 'dadada')
  //   ErrorBoundary.props.hasErrorCreator()
  // }

  render() {
    console.log(this.props.hasError)

    return this.props.hasError ? (
      <StyledErrorBoundary>
        <StyledTitle>Oops, it is error</StyledTitle>
      </StyledErrorBoundary>
    ) : (
      this.props.children
    )
  }
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
