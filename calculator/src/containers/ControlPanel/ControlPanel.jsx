import React from 'react'

import ControlPanelBtn from '@/components/ControlPanelBtn'

import { StyledControlPanel } from './components'
import {
  CLEAR_HISTORY,
  FULL_HISTORY,
} from '@/constants/buttons'

export const ControlPanel = () => {
  return (
    <StyledControlPanel>
      <ControlPanelBtn name={CLEAR_HISTORY} />
      <ControlPanelBtn name={FULL_HISTORY} />
    </StyledControlPanel>
  )
}
