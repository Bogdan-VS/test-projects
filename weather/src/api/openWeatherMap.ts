import { ApiLink, openWeatherKey } from './constants'
import { IOpenWeatherMap } from './types'

export const getWeather = async (lat: number, lon: number) => {
  const response = await fetch(
    `${ApiLink.openWeatherMap}?lat=${lat}&lon=${lon}&units=metric&appid=${openWeatherKey}`,
  )
  const data: IOpenWeatherMap = await response.json()

  return data
}
