import React from 'react'

import ClearAllHistory from '@/components/ClearAllHistory'
import ThemeBtn from '@/components/ThemeBtn'

import {
  StyledSettingsWrapper,
  StyledSwitchComponentsBtn,
  StyledTitle,
} from './components'

import { actionCreatorList } from '@/store/actions/actionCreators'
import { useDispatch } from 'react-redux'

const SettingsWrapper = () => {
  const dispatch = useDispatch()

  const handleSwitchComponents = () => {
    dispatch(actionCreatorList.switchComponentsCreator())
  }

  return (
    <StyledSettingsWrapper>
      <StyledTitle>Settings</StyledTitle>
      <ThemeBtn />
      <ClearAllHistory />
      <StyledSwitchComponentsBtn
        onClick={handleSwitchComponents}>
        Switch to class components
      </StyledSwitchComponentsBtn>
    </StyledSettingsWrapper>
  )
}

export default SettingsWrapper
