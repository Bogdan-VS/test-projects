import {
  IGoogleCalendar,
  IOpenWeatherForcast,
  IOpenWeatherMap,
  IWeatherVisualCrossing,
} from '../../api/types'
import { ILocation } from '../types/locationTypes'

export enum LocationAction {
  GET_LOCATION = 'GET_LOCATION',
  GET_WEATHER = 'GET_WEATHER',
  GET_CURRENT_WEATHER = 'GET_CURRENT_WEATHER',
  SET_LOCATION = 'SET_LOCATION',
  GET_ALL_WEATHER = 'GET_ALL_WEATHER',
  GET_WEATHER_FOR_CAST = 'GET_WEATHER_FOR_CAST',
  GET_CURRENT_CITY = 'GET_CURRENT_CITY',
  GET_WEATHER_FOR_CITY = 'GET_WEATHER_FOR_CITY',
  GET_WEATHER_BY_DAYS = 'GET_WEATHER_BY_DAYS',
  SET_ERROR = 'SET_ERROR',
  SWITCH_CURRENT_WEATHER = 'SWITCH_CURRENT_WEATHER',
  LOG_IN_GOOGLE = 'LOG_IN_GOOGLE',
  LOG_OUT_GOOGLE = 'LOG_OUT_GOOGLE',
  GET_CALENDAR_EVENTS = 'GET_CALENDAR_EVENTS',
  CALL_CALENDAR = 'CALL_CALENDAR',
  SET_ERROR_SIGN = 'SET_ERROR_SIGN',
}

export const getLocationCreator = () => ({
  type: LocationAction.GET_LOCATION,
})

export const callCalendarCreator = () => ({
  type: LocationAction.CALL_CALENDAR,
})

export const getCalendarEventCreator = (payload: IGoogleCalendar | null) => ({
  type: LocationAction.GET_CALENDAR_EVENTS,
  payload,
})

export const signGoogleCreator = () => ({
  type: LocationAction.LOG_IN_GOOGLE,
})

export const signINGoogleCreator = () => ({
  type: LocationAction.LOG_IN_GOOGLE,
})

export const signOutGoogleCreator = () => ({
  type: LocationAction.LOG_OUT_GOOGLE,
})

export const switchWeatherCreator = () => ({
  type: LocationAction.SWITCH_CURRENT_WEATHER,
})

export const setErrorCreator = (payload: string) => ({
  type: LocationAction.SET_ERROR,
  payload,
})

export const setErrorSignCreator = (payload: string) => ({
  type: LocationAction.SET_ERROR_SIGN,
  payload,
})

export const setCityCreator = () => ({
  type: LocationAction.GET_WEATHER_FOR_CITY,
})

export const getCurrentCityCreator = (payload: string) => ({
  type: LocationAction.GET_CURRENT_CITY,
  payload,
})

export const getWeatherByDaysCreator = (payload: IWeatherVisualCrossing) => ({
  type: LocationAction.GET_WEATHER_BY_DAYS,
  payload,
})

export const getWeatherCreator = () => ({
  type: LocationAction.GET_WEATHER,
})

export const setLocationCreator = (payload: ILocation) => ({
  type: LocationAction.SET_LOCATION,
  payload,
})

export const getCurrentWeatherCreator = (payload: IOpenWeatherMap) => ({
  type: LocationAction.GET_CURRENT_WEATHER,
  payload,
})

export const getWeatherForcastCreator = (payload: IOpenWeatherForcast) => ({
  type: LocationAction.GET_WEATHER_FOR_CAST,
  payload,
})
