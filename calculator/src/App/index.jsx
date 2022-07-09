import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

import { Pages } from '@/constants'

import Loader from '@/components/Loader'

const Calculator = lazy(() =>
  import('@/srceens/Calculator'),
)
const Main = lazy(() => import('@/containers/Main'))
const Header = lazy(() => import('@/containers/Header'))
const Settings = lazy(() => import('@/srceens/Settings'))
const Error404 = lazy(() => import('@/srceens/Error404'))

const { CALCULATOR, ERROR, SETTINGS } = Pages

export default () => (
  <Suspense fallback={<Loader />}>
    <Header />
    <Main>
      <Switch>
        <Route
          exact
          path={CALCULATOR}
          component={Calculator}
        />
        <Route exact path={SETTINGS}
component={Settings} />
        <Route exact path={ERROR}
component={Error404} />
      </Switch>
    </Main>
  </Suspense>
)
