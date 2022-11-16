import { getIp } from '@/api/getIp'
import { getWeather } from '@/api/openWeatherMap'
import { call, put, select } from 'redux-saga/effects'
import { LocationAction } from '../actions/locationActions'
import { ILocation } from '../types/locationTypes'
import { currentState, workerGetCurrentWeather, workerGetLocation } from './locationSaga'

describe('testing location saga', () => {
  it('should execute function workerGetLocation', () => {
    const saga = workerGetLocation()
    const location = { lat: 53, lon: 13 }

    expect(saga.next().value).toEqual(call(getIp))
    expect(saga.next(location).value).toEqual(
      put({
        type: LocationAction.SET_LOCATION,
        payload: location,
      }),
    )
    expect(saga.next().done).toEqual(true)
  })

  // it('should execute function workerGetCurrentWeather', () => {
  //   const saga = workerGetCurrentWeather()
  //   const state = { location: { location: { latitude: 53, longitude: 13 } } }
  //   const res = currentState(state)

  //   expect(saga.next().value).toEqual(select(res))
  //   expect(saga.next().value).toEqual(call(getWeather, res?.latitude, res?.longitude))
  //   expect(saga.next().value).toEqual(
  //     put({
  //       type: LocationAction.GET_CURRENT_WEATHER,
  //       payload: { weather: 'Good' },
  //     }),
  //   )

  //   expect(saga.next().done).toEqual(true)
  // })
})
