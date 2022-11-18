import { select } from 'redux-saga/effects'
import { expectSaga, testSaga } from 'redux-saga-test-plan'
import * as matchers from 'redux-saga-test-plan/matchers'

import { getIp } from '@/api/getIp'
import { getWeather, getWeatherForcast } from '@/api/openWeatherMap'
import { LocationAction } from '../actions/locationActions'
import {
  currentState,
  handleWeather,
  watcherLocationSaga,
  workerGetCurrentWeather,
  workerGetLocation,
  workerGetWeatherByDays,
  workerGetWeatherForCast,
} from './locationSaga'
import { getWeatherForDays } from '@/api/weatherVisualCrossing'

describe('testing location saga', () => {
  it('should execute function workerGetLocation', () => {
    const saga = testSaga(workerGetLocation)
    const location = { lat: 53, lon: 13 }

    saga.next().call(getIp)
    saga.next(location).put({
      type: LocationAction.SET_LOCATION,
      payload: location,
    })
    saga.next().isDone()
  })

  it('should execute function workerGetCurrentWeather', () => {
    return expectSaga(workerGetCurrentWeather)
      .provide([
        [select(currentState), { lat: 53, lon: 13 }],
        [matchers.call.fn(getWeather), { weather: 'Good' }],
      ])
      .put({
        type: LocationAction.GET_CURRENT_WEATHER,
        payload: { weather: 'Good' },
      })
      .run()
  })

  it('should execute function workerGetWeatherForCast', () => {
    const mockWeather = [{ '9.00': '15 degree Celsius' }, { '12.00': '17 degree Celsius' }]

    return expectSaga(workerGetWeatherForCast)
      .provide([
        [select(currentState), { lat: 53, lon: 13 }],
        [matchers.call.fn(getWeatherForcast), mockWeather],
      ])
      .put({
        type: LocationAction.GET_WEATHER_FOR_CAST,
        payload: mockWeather,
      })
      .run()
  })

  it('should execute function workerGetWeatherByDays', () => {
    const mockWeather = [{ monday: '15 degree Celsius' }, { friday: '17 degree Celsius' }]

    return expectSaga(workerGetWeatherByDays)
      .provide([
        [select(currentState), { lat: 53, lon: 13 }],
        [matchers.call.fn(getWeatherForDays), mockWeather],
      ])
      .put({
        type: LocationAction.GET_WEATHER_BY_DAYS,
        payload: mockWeather,
      })
      .run()
  })

  it('should execute function handleWeather', () => {
    const saga = testSaga(handleWeather)

    saga.next().call(workerGetCurrentWeather)
    saga.next().call(workerGetWeatherForCast)
    saga.next().call(workerGetWeatherByDays)
    saga.next().isDone()
  })

  it('should execute function watcherLocationSaga', () => {
    const saga = testSaga(watcherLocationSaga)

    saga.next().takeEvery(LocationAction.GET_LOCATION, workerGetLocation)
    saga.next().take(LocationAction.GET_WEATHER)
    saga.next().call(handleWeather)
    saga.next().isDone()
  })
})
