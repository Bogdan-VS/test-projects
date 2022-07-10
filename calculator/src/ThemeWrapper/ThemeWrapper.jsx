import React, { useEffect } from 'react'

import { BrowserRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { ThemeProvider } from 'styled-components'

import Application from '@/App'
import GlobalStyles from '@/globalStyles'

import { changeThemeCreator } from '@/store/actionCreators'

import { darkTheme, lightTheme } from '@/theme'

export const ThemeWrapper = () => {
  const { theme, isLightTheme } = useSelector(
    state => state.theme,
  )

  const dispatch = useDispatch()

  useEffect(() => {
    isLightTheme
      ? dispatch(changeThemeCreator(lightTheme))
      : dispatch(changeThemeCreator(darkTheme))

    if (isLightTheme) {
      dispatch(changeThemeCreator(lightTheme))
    }
  }, [dispatch, isLightTheme])

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Application />
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  )
}
