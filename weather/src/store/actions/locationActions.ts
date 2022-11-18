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

export const creator = {
  getLocationCreator: () => ({
    type: LocationAction.GET_LOCATION,
  }),
  callCalendarCreator: () => ({
    type: LocationAction.CALL_CALENDAR,
  }),
  getCalendarEventCreator: (payload: IGoogleCalendar | null) => ({
    type: LocationAction.GET_CALENDAR_EVENTS,
    payload,
  }),
  signGoogleCreator: () => ({
    type: LocationAction.LOG_IN_GOOGLE,
  }),
  signINGoogleCreator: () => ({
    type: LocationAction.LOG_IN_GOOGLE,
  }),
  signOutGoogleCreator: () => ({
    type: LocationAction.LOG_OUT_GOOGLE,
  }),
  switchWeatherCreator: () => ({
    type: LocationAction.SWITCH_CURRENT_WEATHER,
  }),
  setErrorCreator: (payload: string) => ({
    type: LocationAction.SET_ERROR,
    payload,
  }),
  setErrorSignCreator: (payload: string) => ({
    type: LocationAction.SET_ERROR_SIGN,
    payload,
  }),
  setCityCreator: () => ({
    type: LocationAction.GET_WEATHER_FOR_CITY,
  }),
  getCurrentCityCreator: (payload: string) => ({
    type: LocationAction.GET_CURRENT_CITY,
    payload,
  }),
  getWeatherByDaysCreator: (payload: IWeatherVisualCrossing) => ({
    type: LocationAction.GET_WEATHER_BY_DAYS,
    payload,
  }),
  getWeatherCreator: () => ({
    type: LocationAction.GET_WEATHER,
  }),
  setLocationCreator: (payload: ILocation) => ({
    type: LocationAction.SET_LOCATION,
    payload,
  }),
  getCurrentWeatherCreator: (payload: IOpenWeatherMap) => ({
    type: LocationAction.GET_CURRENT_WEATHER,
    payload,
  }),
  getWeatherForcastCreator: (payload: IOpenWeatherForcast) => ({
    type: LocationAction.GET_WEATHER_FOR_CAST,
    payload,
  }),
}
