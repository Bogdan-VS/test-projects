import { IOpenWeatherForcast, IOpenWeatherMap } from '../../api/types'

export interface ILocation {
  latitude: number
  longitude: number
  city: string
}

export interface IInitStateLocation {
  city: string
  location: ILocation | null
  currentWeather: IOpenWeatherMap | null
  weatherForDays: IOpenWeatherForcast | null
}
