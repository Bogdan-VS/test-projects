import { IOpenWeatherForcast, IOpenWeatherMap, IWeatherVisualCrossing } from '../../api/types'

export interface ILocation {
  latitude: number
  longitude: number
  city: string
}

export interface IInitStateLocation {
  error: string
  city: string
  location: ILocation | null
  currentWeather: IOpenWeatherMap | null
  weatherForCast: IOpenWeatherForcast | null
  weatherByDays: IWeatherVisualCrossing | null
}
