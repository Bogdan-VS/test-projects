import React, { Component } from 'react'

import { connect } from 'react-redux'

import PropsType from 'prop-types'

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
        <StyledTitle>
          {this.props.theme.isLightTheme
            ? 'Light theme'
            : 'Dark theme'}
        </StyledTitle>
        <StyledSwitchBtn
          onClick={() => this.props.checkThemeCreator()}
        />
      </StyledThemeBtn>
    )
  }
}

ThemeBtn.PropsType = {
  isLightTheme: PropsType.string,
  checkThemeCreator: PropsType.func,
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
