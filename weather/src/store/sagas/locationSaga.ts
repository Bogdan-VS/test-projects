import { takeEvery, put } from 'redux-saga/effects'
import { getIp } from '../../api/getIp'
import { getWeather } from '../../api/openWeatherMap'
import { IOpenWeatherMap } from '../../api/types'
import { getWeatherCreator, LocationAction } from '../actions/locationActions'
import { ILocation } from '../types/locationTypes'

export function* workerSaga() {
  const location: ILocation = yield getIp()
  const weather: IOpenWeatherMap = yield getWeather(location.latitude, location.longitude)
  yield put(getWeatherCreator(weather))
  console.log(weather)
}

export function* watcherLocationSaga() {
  yield takeEvery(LocationAction.GET_LOCATION, workerSaga)
}
