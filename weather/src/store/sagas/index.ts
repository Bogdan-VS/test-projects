// import { all, fork } from 'redux-saga/effects'
import { all } from 'redux-saga/effects'
import { watcherLocationSaga } from './locationSaga'
import { watcherWeatherByCity } from './weatherByCity'

function* rootSaga() {
  yield all([watcherLocationSaga(), watcherWeatherByCity()])
}

export default rootSaga
