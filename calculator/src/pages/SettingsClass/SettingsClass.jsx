import React, { Component } from 'react'

import SettingsWrapperClass from '@/containers/SettingsWrapperClass/SettingsWrapperClass'

import { StyledSettings } from './components'

export class SettingsClass extends Component {
  render() {
    return (
      <StyledSettings>
        <SettingsWrapperClass />
      </StyledSettings>
    )
  }
}
