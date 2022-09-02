import React, { Component } from 'react'

import { connect } from 'react-redux'

import PropsType from 'prop-types'

import { actionCreatorList } from '@/store/actionCreators'

import {
  StyledSelect,
  StyledOption,
} from './components'

class ThemeBtn extends Component {
  handleCurrentTheme = e => {
    const { addCurrentThemeCreator } = this.props

    addCurrentThemeCreator(e.target.value)
  }

  render() {
    const { currentTheme } = this.props.theme

    return (
      <StyledSelect
        onChange={this.handleCurrentTheme}
        value={currentTheme}>
        <StyledOption value="lightTheme">
          Light theme
        </StyledOption>
        <StyledOption value="darkTheme">
          Dark theme
        </StyledOption>
        <StyledOption value="coloredTheme">
          Colored theme
        </StyledOption>
      </StyledSelect>
    )
  }
}

ThemeBtn.propsType = {
  currentTheme: PropsType.string,
  checkThemeCreator: PropsType.func,
}

const mapStateToProps = state => {
  return { theme: state.theme }
}

const mapDispatchToProps = () => {
  return {
    addCurrentThemeCreator:
      actionCreatorList.addCurrentThemeCreator,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps(),
)(ThemeBtn)
