import React from 'react'

import ControlPanelBtn from '@/components/ControlPanelBtn'

import { StyledControlPanel } from './components'
import {
  clearHistory,
  fullHistory,
} from '@/constants/buttons'

export const ControlPanel = () => {
  return (
    <StyledControlPanel>
      <ControlPanelBtn name={clearHistory} />
      <ControlPanelBtn name={fullHistory} />
    </StyledControlPanel>
  )
}
