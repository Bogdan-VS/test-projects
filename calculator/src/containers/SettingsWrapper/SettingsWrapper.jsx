import ClearAllHistory from '@/components/ClearAllHistory/ClearAllHistory'
import ThemeBtn from '@/components/ThemeBtn/ThemeBtn'
import React, { Component } from 'react'

// import ThemeBtn from '@/components/ThemeBtn'

import {
  StyledSettingsWrapper,
  StyledTitle,
} from './components'

export class SettingsWrapper extends Component {
  render() {
    return (
      <StyledSettingsWrapper>
        <StyledTitle>Settings</StyledTitle>
        <ThemeBtn />
        <ClearAllHistory />
      </StyledSettingsWrapper>
    )
  }
}
