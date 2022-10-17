import { IOpenWeatherMap } from '../../api/types'

export interface ILocation {
  latitude: number
  longitude: number
}

export interface IInitStateLocation {
  weather: IOpenWeatherMap
}
