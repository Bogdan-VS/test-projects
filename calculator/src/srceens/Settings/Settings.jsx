import React, { Component } from 'react'

import SettingsWrapper from '@/containers/SettingsWrapper'

import { StyledSettings } from './components'

export class Settings extends Component {
  render() {
    return (
      <StyledSettings>
        <SettingsWrapper />
      </StyledSettings>
    )
  }
}
