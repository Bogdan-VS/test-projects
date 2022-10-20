import { takeEvery, put, call, select } from 'redux-saga/effects'
import { getWeatherByCity, getWeatherByCityForcast } from '../../api/openWeatherMap'
import { IError, IOpenWeatherForcast, IOpenWeatherMap } from '../../api/types'
import {
  getCurrentWeatherCreator,
  getWeatherForcastCreator,
  LocationAction,
  setErrorCreator,
} from '../actions/locationActions'

import { RootState } from '../reducers'

const currentState = (state: RootState) => state.location.city

function* currentWeatherWorker() {
  try {
    const city: string = yield select(currentState)
    const weather: IOpenWeatherMap | IError = yield call(getWeatherByCity, city)

    if ((weather as IError).cod === '400') {
      throw Error((weather as IError).message)
    }

    yield put(getCurrentWeatherCreator(weather as IOpenWeatherMap))
    yield put(setErrorCreator(''))
  } catch (error) {
    yield put(setErrorCreator((error as Error).message))
  }
}

function* currentWeatherForcastWorker() {
  try {
    const city: string = yield select(currentState)
    const weather: IOpenWeatherForcast | IError = yield call(getWeatherByCityForcast, city)

    if ((weather as IError).cod === '400') {
      throw Error((weather as IError).message)
    }

    yield put(getWeatherForcastCreator(weather as IOpenWeatherForcast))
    yield put(setErrorCreator(''))
  } catch (error) {
    yield put(setErrorCreator((error as Error).message))
  }
}

function* weatherWatcher() {
  yield call(currentWeatherWorker)
  yield call(currentWeatherForcastWorker)
}

export function* watcherWeatherByCity() {
  yield takeEvery(LocationAction.GET_WEATHER_FOR_CITY, weatherWatcher)
}
