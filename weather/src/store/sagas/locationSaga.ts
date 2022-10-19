import { fork } from 'child_process'
import { takeEvery, put, call, select, take } from 'redux-saga/effects'
import { getIp } from '../../api/getIp'
import { getWeather, getWeatherForcast } from '../../api/openWeatherMap'
import { IOpenWeatherForcast, IOpenWeatherMap } from '../../api/types'
import {
  getCurrentWeatherCreator,
  getWeatherForcastCreator,
  LocationAction,
  setLocationCreator,
} from '../actions/locationActions'
import { RootState } from '../reducers'
import { ILocation } from '../types/locationTypes'

const currentState = (state: RootState) => state.location.location

export function* workerGetLocation() {
  const location: ILocation = yield getIp()
  yield put(setLocationCreator(location))
}

export function* workerGetCurrentWeather() {
  const location: ILocation = yield select(currentState)
  const weather: IOpenWeatherMap = yield call(getWeather, location.latitude, location.longitude)
  yield put(getCurrentWeatherCreator(weather))
}

export function* workerGetWeatherForDays() {
  const location: ILocation = yield select(currentState)
  const weather: IOpenWeatherForcast = yield call(
    getWeatherForcast,
    location.latitude,
    location.longitude,
  )
  yield put(getWeatherForcastCreator(weather))
}

export function* handleWeather() {
  yield call(workerGetCurrentWeather)
  yield call(workerGetWeatherForDays)
}

export function* watcherLocationSaga() {
  yield takeEvery(LocationAction.GET_LOCATION, workerGetLocation)
  yield take(LocationAction.GET_WEATHER)
  yield call(handleWeather)
}
