import React, { Component } from 'react'

import ControlPanelBtnClass from '@/components/ControlPanelBtnClass/ControlPanelBtnClass'

import { StyledControlPanel } from './components'
import { CLEAR_HISTORY, FULL_HISTORY } from '@/constants/buttons'

export class ControlPanelClass extends Component {
  render() {
    return (
      <StyledControlPanel>
        <ControlPanelBtnClass name={CLEAR_HISTORY} />
        <ControlPanelBtnClass name={FULL_HISTORY} />
      </StyledControlPanel>
    )
  }
}
