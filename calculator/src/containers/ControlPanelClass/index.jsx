import React, { Component } from 'react'

import ControlPanelBtnClass from '@/components/ControlPanelBtnClass'

import { StyledControlPanel } from '../ControlPanel/components'
import { CLEAR_HISTORY, FULL_HISTORY } from '@/constants/buttons'

class ControlPanelClass extends Component {
  render() {
    return (
      <StyledControlPanel>
        <ControlPanelBtnClass name={CLEAR_HISTORY} />
        <ControlPanelBtnClass name={FULL_HISTORY} />
      </StyledControlPanel>
    )
  }
}

export default ControlPanelClass
