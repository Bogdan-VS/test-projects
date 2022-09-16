import React, { Component } from 'react'

import SettingsWrapperClass from '@/containers/SettingsWrapperClass'

import { StyledSettings } from '../Settings/components'

class SettingsClass extends Component {
  render() {
    return (
      <StyledSettings>
        <SettingsWrapperClass />
      </StyledSettings>
    )
  }
}

export default SettingsClass
