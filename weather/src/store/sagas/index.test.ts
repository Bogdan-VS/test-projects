import { testSaga } from 'redux-saga-test-plan'
import { call } from 'redux-saga/effects'

import rootSaga from '.'
import { googleWatcher } from './googleCalendar'
import { watcherLocationSaga } from './locationSaga'
import { watcherWeatherByCity } from './weatherByCity'

describe('testing root saga', () => {
  it('should execute function rootSaga', () => {
    const saga = testSaga(rootSaga)

    saga.next().all([call(watcherLocationSaga), call(watcherWeatherByCity), call(googleWatcher)])
    saga.next().isDone()
  })
})
