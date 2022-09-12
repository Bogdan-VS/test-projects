import React from 'react'

import {
  useDispatch,
  useSelector,
} from 'react-redux'

import { actionCreatorList } from '@/store/actions/actionCreators'

import {
  StyledSelect,
  StyledOption,
} from './components'

export const ThemeBtn = () => {
  const { currentTheme } = useSelector(
    state => state.settings,
  )

  const dispatch = useDispatch()

  const handleCurrentTheme = e => {
    dispatch(
      actionCreatorList.addCurrentThemeCreator(
        e.target.value,
      ),
    )
  }

  return (
    <StyledSelect
      onChange={handleCurrentTheme}
      value={currentTheme}>
      <StyledOption value="lightTheme">
        Light theme
      </StyledOption>
      <StyledOption value="darkTheme">
        Dark theme
      </StyledOption>
      <StyledOption value="coloredTheme">
        Colored theme
      </StyledOption>
    </StyledSelect>
  )
}
