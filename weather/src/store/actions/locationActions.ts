import { IOpenWeatherForcast, IOpenWeatherMap } from '../../api/types'
import { ILocation } from '../types/locationTypes'

export enum LocationAction {
  GET_LOCATION = 'GET_LOCATION',
  GET_WEATHER = 'GET_WEATHER',
  GET_CURRENT_WEATHER = 'GET_CURRENT_WEATHER',
  SET_LOCATION = 'SET_LOCATION',
  GET_ALL_WEATHER = 'GET_ALL_WEATHER',
  GET_WEATHER_FOR_CAST = 'GET_WEATHER_FOR_CAST',
  GET_CURRENT_CITY = 'GET_CURRENT_CITY',
}

export const getLocationCreator = () => ({
  type: LocationAction.GET_LOCATION,
})

export const getCurrentCityCreator = (payload: string) => ({
  type: LocationAction.GET_CURRENT_CITY,
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
