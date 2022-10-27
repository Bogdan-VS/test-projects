// import { all, fork } from 'redux-saga/effects'
import { all } from 'redux-saga/effects'
import { googleWatcher } from './googleCalendar'
import { watcherLocationSaga } from './locationSaga'
import { watcherWeatherByCity } from './weatherByCity'

function* rootSaga() {
  yield all([watcherLocationSaga(), watcherWeatherByCity(), googleWatcher()])
}

export default rootSaga
