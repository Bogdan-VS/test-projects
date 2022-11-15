import { LocationAction } from '@/store/actions/locationActions'
import locationReducer, { initState } from '.'

describe('check location reducer', () => {
  it('should return initial state', () => {
    const result = locationReducer(undefined, { type: '' })

    expect(result).toEqual(initState)
  })

  it('should return state with seting location', () => {
    const result = locationReducer(
      { location: null },
      { type: LocationAction.SET_LOCATION, payload: { lat: 50, lon: 13 } },
    )

    expect(result.location).toStrictEqual({ lat: 50, lon: 13 })
  })

  it('should return state with current weather', () => {
    const result = locationReducer(
      { currentWeather: null },
      { type: LocationAction.GET_CURRENT_WEATHER, payload: { weather: 'Good' } },
    )

    expect(result.currentWeather).toStrictEqual({ weather: 'Good' })
  })

  it('should return state with weather forcast', () => {
    const result = locationReducer(
      { weatherForCast: null },
      {
        type: LocationAction.GET_WEATHER_FOR_CAST,
        payload: [{ '9.00': '15 degree Celsius' }, { '12.00': '17 degree Celsius' }],
      },
    )

    expect(result.weatherForCast).toStrictEqual([
      { '9.00': '15 degree Celsius' },
      { '12.00': '17 degree Celsius' },
    ])
  })

  it('should return state with weather by days', () => {
    const result = locationReducer(
      { weatherByDays: null },
      {
        type: LocationAction.GET_WEATHER_BY_DAYS,
        payload: [{ monday: '15 degree Celsius' }, { friday: '17 degree Celsius' }],
      },
    )

    expect(result.weatherByDays).toStrictEqual([
      { monday: '15 degree Celsius' },
      { friday: '17 degree Celsius' },
    ])
  })

  it('should return city', () => {
    const result = locationReducer(
      { city: '' },
      {
        type: LocationAction.GET_CURRENT_CITY,
        payload: 'Gomel',
      },
    )

    expect(result.city).toStrictEqual('Gomel')
  })

  it('should return error', () => {
    const result = locationReducer(
      { error: '' },
      {
        type: LocationAction.SET_ERROR,
        payload: 'Error',
      },
    )

    expect(result.error).toStrictEqual('Error')
  })

  it('should return error', () => {
    const result = locationReducer(
      { errorSign: '' },
      {
        type: LocationAction.SET_ERROR_SIGN,
        payload: 'Error of registration',
      },
    )

    expect(result.errorSign).toStrictEqual('Error of registration')
  })

  it('should switch weather', () => {
    const result = locationReducer(
      { isWeatherForCast: true },
      {
        type: LocationAction.SWITCH_CURRENT_WEATHER,
      },
    )

    expect(result.isWeatherForCast).toStrictEqual(false)
  })

  it('should return calendar events', () => {
    const result = locationReducer(
      { calendarEvents: null },
      {
        type: LocationAction.GET_CALENDAR_EVENTS,
        payload: [{ event: 'solve codewars', time: '10.00-12.00' }],
      },
    )

    expect(result.calendarEvents).toStrictEqual([{ event: 'solve codewars', time: '10.00-12.00' }])
  })
})
