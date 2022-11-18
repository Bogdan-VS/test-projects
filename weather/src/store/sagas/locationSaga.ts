import { takeEvery, put, call, select, take } from 'redux-saga/effects'

import { getIp } from '@/api/getIp'
import { getWeather, getWeatherForcast } from '@/api/openWeatherMap'
import { IOpenWeatherForcast, IOpenWeatherMap, IWeatherVisualCrossing } from '@/api/types'
import { getWeatherForDays } from '@/api/weatherVisualCrossing'
import { creator, LocationAction } from '../actions/locationActions'
import { RootState } from '../reducers'
import { ILocation } from '../types/locationTypes'

export const currentState = (state: RootState) => state.location.location

export function* workerGetLocation() {
  const location: ILocation = yield call(getIp)
  yield put(creator.setLocationCreator(location))
}

export function* workerGetCurrentWeather() {
  const location: ILocation = yield select(currentState)
  const weather: IOpenWeatherMap = yield call(getWeather, location.latitude, location.longitude)
  yield put(creator.getCurrentWeatherCreator(weather))
}

export function* workerGetWeatherForCast() {
  const location: ILocation = yield select(currentState)
  const weather: IOpenWeatherForcast = yield call(
    getWeatherForcast,
    location.latitude,
    location.longitude,
  )
  yield put(creator.getWeatherForcastCreator(weather))
}

export function* workerGetWeatherByDays() {
  const location: ILocation = yield select(currentState)
  const weather: IWeatherVisualCrossing = yield call(
    getWeatherForDays,
    location.latitude,
    location.longitude,
  )
  yield put(creator.getWeatherByDaysCreator(weather))
}

export function* handleWeather() {
  yield call(workerGetCurrentWeather)
  yield call(workerGetWeatherForCast)
  yield call(workerGetWeatherByDays)
}

export function* watcherLocationSaga() {
  yield takeEvery(LocationAction.GET_LOCATION, workerGetLocation)
  yield take(LocationAction.GET_WEATHER)
  yield call(handleWeather)
}
