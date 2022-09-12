import React, { Component } from 'react'

import { connect } from 'react-redux'

import ThemeBtnClass from '@/components/ThemeBtnClass/ThemeBtnClass'
import ClearAllHistoryClass from '@/components/ClearAllHistoryClass/ClearAllHistoryClass'

import {
  StyledSettingsWrapper,
  StyledSwitchComponentsBtn,
  StyledTitle,
} from './components'

import { actionCreatorList } from '@/store/actions/actionCreators'

class SettingsWrapperClass extends Component {
  handleSwitchComponents = () => {
    this.props.switchComponentsCreator()
  }

  render() {
    return (
      <StyledSettingsWrapper>
        <StyledTitle>Settings</StyledTitle>
        <ThemeBtnClass />
        <ClearAllHistoryClass />
        <StyledSwitchComponentsBtn
          onClick={this.handleSwitchComponents}>
          Switch to function Components
        </StyledSwitchComponentsBtn>
      </StyledSettingsWrapper>
    )
  }
}

const mapStateToProps = state => ({
  isFunComponents: state.settings.isFunComponents,
})

const mapDispatchToProps = () => ({
  switchComponentsCreator:
    actionCreatorList.switchComponentsCreator,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps(),
)(SettingsWrapperClass)
