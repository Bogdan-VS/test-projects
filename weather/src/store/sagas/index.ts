import { all, call } from 'redux-saga/effects'

import { googleWatcher } from './googleCalendar'
import { watcherLocationSaga } from './locationSaga'
import { watcherWeatherByCity } from './weatherByCity'

function* rootSaga() {
  yield all([call(watcherLocationSaga), call(watcherWeatherByCity), call(googleWatcher)])
}

export default rootSaga
