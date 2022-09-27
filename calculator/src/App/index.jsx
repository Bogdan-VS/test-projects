import React, { lazy, Suspense, useEffect } from 'react'

import { Switch, Route, BrowserRouter } from 'react-router-dom'

import { PersistGate } from 'redux-persist/lib/integration/react'
import { useDispatch, useSelector } from 'react-redux'
import { themes } from '@/theme/theme'
import { persistor } from '@/store/store'
import { Pages } from '@/constants'
import Loader from '@/components/Loader'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '@/theme/globalStyles'

import { actionCreatorList } from '@/store/actions/actionCreators'
import ErrorBoundary from '@/components/ErrorBoundary'
import LoaderClass from '@/components/LoaderClass'

const Calculator = lazy(() => import('@/pages/Calculator'))
const CalculatorClass = lazy(() =>
  import('@/pages/CalculatorClass'),
)
const Main = lazy(() => import('@/containers/Main'))
const MainClass = lazy(() => import('@/containers/MainClass'))
const Header = lazy(() => import('@/containers/Header'))
const HeaderClass = lazy(() =>
  import('@/containers/HeaderClass'),
)
const Settings = lazy(() => import('@/pages/Settings'))
const SettingsClass = lazy(() => import('@/pages/SettingsClass'))
const Error404 = lazy(() => import('@/pages/Error404'))
const Error404Class = lazy(() => import('@/pages/Error404Class'))

const { CALCULATOR, ERROR, SETTINGS } = Pages

export default () => {
  const { theme, currentTheme, isFunComponents } = useSelector(
    state => state.settings,
  )

  const dispatch = useDispatch()

  useEffect(() => {
    if (currentTheme) {
      dispatch(
        actionCreatorList.changeThemeCreator(
          themes[currentTheme],
        ),
      )
    }
  }, [currentTheme])

  if (!isFunComponents) {
    return (
      <ThemeProvider theme={theme}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Suspense fallback={<LoaderClass />}>
              <ErrorBoundary>
                <HeaderClass />
                <MainClass>
                  <Switch>
                    <Route
                      exact
                      path={CALCULATOR}
                      component={CalculatorClass}
                    />
                    <Route
                      exact
                      path={SETTINGS}
                      component={SettingsClass}
                    />
                    <Route
                      exact
                      path={ERROR}
                      component={Error404Class}
                    />
                  </Switch>
                </MainClass>
              </ErrorBoundary>
            </Suspense>
            <GlobalStyles />
          </BrowserRouter>
        </PersistGate>
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Suspense fallback={<Loader />}>
            <ErrorBoundary>
              <Header />
              <Main>
                <Switch>
                  <Route
                    exact
                    path={CALCULATOR}
                    component={Calculator}
                  />
                  <Route
                    exact
                    path={SETTINGS}
                    component={Settings}
                  />
                  <Route
                    exact
                    path={ERROR}
                    component={Error404}
                  />
                </Switch>
              </Main>
            </ErrorBoundary>
          </Suspense>
          <GlobalStyles />
        </BrowserRouter>
      </PersistGate>
    </ThemeProvider>
  )
}
