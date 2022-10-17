import { IOpenWeatherMap } from '../../api/types'

export enum LocationAction {
  GET_LOCATION = 'GET_LOCATION',
  GET_WEATHER = 'GET_WEATHER',
}

export const getLocationCreator = () => ({
  type: LocationAction.GET_LOCATION,
})

export const getWeatherCreator = (payload: IOpenWeatherMap) => ({
  type: LocationAction.GET_WEATHER,
  payload,
})
