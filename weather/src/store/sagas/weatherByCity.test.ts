import { getWeatherByCity, getWeatherForcast } from '@/api/openWeatherMap'
import { expectSaga, testSaga } from 'redux-saga-test-plan'
import { select } from 'redux-saga/effects'
import * as matchers from 'redux-saga-test-plan/matchers'
import { LocationAction } from '../actions/locationActions'
import {
  currentLocation,
  currentState,
  currentWeatherByDaysWorker,
  currentWeatherForcastWorker,
  watcherWeatherByCity,
  weatherWatcher,
} from '@/store/sagas/weatherByCity'
import { currentWeatherWorker } from './weatherByCity'
import { throwError } from 'redux-saga-test-plan/providers'
import { getWeatherForDays } from '@/api/weatherVisualCrossing'

describe('testing weatherByCity saga', () => {
  it('should execute function currentWeatherWorker with success', () => {
    return expectSaga(currentWeatherWorker)
      .provide([
        [select(currentState), 'Gomel'],
        [matchers.call.fn(getWeatherByCity), 'Gomel'],
      ])
      .put({
        type: LocationAction.GET_CURRENT_WEATHER,
        payload: 'Gomel',
      })
      .put({
        type: LocationAction.SET_ERROR,
        payload: '',
      })
      .run()
  })

  it('should execute function currentWeatherWorker with error', () => {
    const error = new Error('Error')

    return expectSaga(currentWeatherWorker)
      .provide([
        [select(currentState), 'Gomel'],
        [matchers.call.fn(getWeatherByCity), throwError(error)],
      ])
      .put({
        type: LocationAction.SET_ERROR,
        payload: error.message,
      })
      .run()
  })

  it('should execute function currentWeatherForcastWorker with success', () => {
    const mockWeather = [{ '9.00': '15 degree Celsius' }, { '12.00': '17 degree Celsius' }]

    return expectSaga(currentWeatherForcastWorker)
      .provide([
        [select(currentLocation), { lat: 53, lon: 13 }],
        [matchers.call.fn(getWeatherForcast), mockWeather],
      ])
      .put({
        type: LocationAction.GET_WEATHER_FOR_CAST,
        payload: mockWeather,
      })
      .run()
  })

  it('should execute function currentWeatherForcastWorker with error', () => {
    const error = new Error('Error')

    return expectSaga(currentWeatherForcastWorker)
      .provide([
        [select(currentLocation), { lat: 53, lon: 13 }],
        [matchers.call.fn(getWeatherForcast), throwError(error)],
      ])
      .put({
        type: LocationAction.SET_ERROR,
        payload: error.message,
      })
      .run()
  })

  it('should execute function currentWeatherByDaysWorker with success', () => {
    const mockWeather = [{ monday: '15 degree Celsius' }, { friday: '17 degree Celsius' }]

    return expectSaga(currentWeatherByDaysWorker)
      .provide([
        [select(currentLocation), { lat: 53, lon: 13 }],
        [matchers.call.fn(getWeatherForDays), mockWeather],
      ])
      .put({
        type: LocationAction.GET_WEATHER_BY_DAYS,
        payload: mockWeather,
      })
      .run()
  })

  it('should execute function currentWeatherByDaysWorker with error', () => {
    const error = new Error('Error')

    return expectSaga(currentWeatherByDaysWorker)
      .provide([
        [select(currentLocation), { lat: 53, lon: 13 }],
        [matchers.call.fn(getWeatherForDays), throwError(error)],
      ])
      .put({
        type: LocationAction.SET_ERROR,
        payload: error.message,
      })
      .run()
  })

  it('should execute function weatherWatcher', () => {
    const saga = testSaga(weatherWatcher)

    saga.next().call(currentWeatherWorker)
    saga.next().take(LocationAction.GET_CURRENT_WEATHER)
    saga.next().call(currentWeatherForcastWorker)
    saga.next().call(currentWeatherByDaysWorker)
    saga.next().isDone()
  })

  it('should execute function watcherWeatherByCity', () => {
    const saga = testSaga(watcherWeatherByCity)

    saga.next().takeEvery(LocationAction.GET_WEATHER_FOR_CITY, weatherWatcher)
    saga.next().isDone()
  })
})
