import { ApiLink, openWeatherKey } from './constants'
import { IOpenWeatherForcast, IOpenWeatherMap } from './types'

export const getWeather = async (lat: number, lon: number) => {
  const response = await fetch(
    `${ApiLink.currentWeather}?lat=${lat}&lon=${lon}&units=metric&appid=${openWeatherKey}`,
  )
  const data: IOpenWeatherMap = await response.json()

  return data
}

export const getWeatherForcast = async (lat: number, lon: number) => {
  const response = await fetch(
    `${ApiLink.weatherForDays}?lat=${lat}&lon=${lon}&units=metric&appid=${openWeatherKey}`,
  )
  const data: IOpenWeatherForcast = await response.json()

  return data
}

export const getWeatherByCity = async (city: string) => {
  const response = await fetch(
    `${ApiLink.currentWeather}?q=${city}&units=metric&appid=${openWeatherKey}`,
  )
  const data: IOpenWeatherMap = await response.json()

  return data
}

export const getWeatherByCityForcast = async (city: string) => {
  const response = await fetch(
    `${ApiLink.weatherForDays}?q=${city}&units=metric&appid=${openWeatherKey}`,
  )
  const data: IOpenWeatherForcast = await response.json()

  return data
}
