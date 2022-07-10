import React, { Component } from 'react'

import { connect } from 'react-redux'

import { checkThemeCreator } from '@/store/actionCreators'

import {
  StyledSwitchBtn,
  StyledThemeBtn,
  StyledTitle,
} from './components'

class ThemeBtn extends Component {
  render() {
    return (
      <StyledThemeBtn>
        <StyledTitle>Theme</StyledTitle>
        <StyledSwitchBtn
          onClick={() => this.props.checkThemeCreator()}
        />
      </StyledThemeBtn>
    )
  }
}

const mapStateToProps = state => {
  return { theme: state.theme }
}

const mapDispatchToProps = () => {
  return {
    checkThemeCreator,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps(),
)(ThemeBtn)
