import React, {
  lazy,
  Suspense,
  useEffect,
} from 'react'

import {
  Switch,
  Route,
  BrowserRouter,
} from 'react-router-dom'

import { PersistGate } from 'redux-persist/lib/integration/react'
import {
  useDispatch,
  useSelector,
} from 'react-redux'

import { persistor } from '@/store/store'
import { Pages } from '@/constants'
import Loader from '@/components/Loader'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '@/globalStyles'
import { themes } from '@/theme'
import { actionCreatorList } from '@/store/actionCreators'
import { ErrorBoundary } from '@/components/ErrorBoundary'

const Calculator = lazy(() =>
  import('@/pages/Calculator'),
)
const Main = lazy(() =>
  import('@/containers/Main'),
)
const Header = lazy(() =>
  import('@/containers/Header'),
)
const Settings = lazy(() =>
  import('@/pages/Settings'),
)
const Error404 = lazy(() =>
  import('@/pages/Error404'),
)

const { CALCULATOR, ERROR, SETTINGS } = Pages

export default () => {
  const { theme, currentTheme } = useSelector(
    state => state.theme,
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

  return (
    <ThemeProvider theme={theme}>
      <PersistGate
        loading={null}
        persistor={persistor}>
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
