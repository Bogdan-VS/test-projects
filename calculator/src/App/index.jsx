import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

import { Pages } from '@/constants'

import Loader from '@/components/Loader'
import Main from '@/containers/Main'

const { CALCULATOR, HOME_PAGE_ROUTE } = Pages

const HomePage = lazy(() => import('@/pages/Home'))
const Calculator = lazy(() =>
  import('@/srceens/Calculator'),
)
const Header = lazy(() => import('@/containers/Header'))

export default () => (
  <Suspense fallback={<Loader />}>
    <Header />
    <Main>
      <Switch>
        <Route
          exact
          path={HOME_PAGE_ROUTE}
          component={HomePage}
        />
        <Route
          exact
          path={CALCULATOR}
          component={Calculator}
        />
      </Switch>
    </Main>
  </Suspense>
)
