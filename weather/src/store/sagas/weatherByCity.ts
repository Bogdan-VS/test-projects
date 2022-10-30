import { takeEvery, put, call, select, take } from 'redux-saga/effects'

import { getWeatherByCity, getWeatherForcast } from '@/api/openWeatherMap'
import {
  IError,
  IErrorVisualCrossing,
  IOpenWeatherForcast,
  IOpenWeatherMap,
  IWeatherVisualCrossing,
} from '@/api/types'
import { getWeatherForDays } from '@/api/weatherVisualCrossing'
import { ErrorCode } from '@/constants/errorCode'
import { creator, LocationAction } from '../actions/locationActions'

import { RootState } from '../reducers'
import { ILocation } from '../types/locationTypes'

const currentState = (state: RootState) => state.location.city
const currentLocation = (state: RootState) => state.location.location

function* currentWeatherWorker() {
  try {
    const city: string = yield select(currentState)
    const weather: IOpenWeatherMap | IError = yield call(getWeatherByCity, city)

    if (
      (weather as IError).cod === ErrorCode.error400 ||
      (weather as IError).cod === ErrorCode.error404
    ) {
      throw Error((weather as IError).message)
    }

    yield put(creator.getCurrentWeatherCreator(weather as IOpenWeatherMap))
    yield put(creator.setErrorCreator(''))
  } catch (error) {
    yield put(creator.setErrorCreator((error as Error).message))
  }
}

function* currentWeatherForcastWorker() {
  try {
    const loc: ILocation = yield select(currentLocation)
    const weather: IOpenWeatherForcast | IError = yield call(
      getWeatherForcast,
      loc.latitude,
      loc.longitude,
    )

    yield put(creator.getWeatherForcastCreator(weather as IOpenWeatherForcast))
  } catch (error) {
    yield put(creator.setErrorCreator((error as Error).message))
  }
}

function* currentWeatherByDaysWorker() {
  try {
    const loc: ILocation = yield select(currentLocation)
    const weather: IWeatherVisualCrossing | IErrorVisualCrossing = yield call(
      getWeatherForDays,
      loc.latitude,
      loc.longitude,
    )

    if ((weather as IErrorVisualCrossing).errorCode === ErrorCode.error999) {
      throw Error((weather as IErrorVisualCrossing).message)
    }

    yield put(creator.getWeatherByDaysCreator(weather as IWeatherVisualCrossing))
  } catch (error) {
    yield put(creator.setErrorCreator((error as Error).message))
  }
}

function* weatherWatcher() {
  yield call(currentWeatherWorker)
  yield take(LocationAction.GET_CURRENT_WEATHER)
  yield call(currentWeatherForcastWorker)
  yield call(currentWeatherByDaysWorker)
}

export function* watcherWeatherByCity() {
  yield takeEvery(LocationAction.GET_WEATHER_FOR_CITY, weatherWatcher)
}
