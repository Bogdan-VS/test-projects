import { ApiLink, visualCrossingKey } from './constants'
import { IWeatherVisualCrossing } from './types'

export const getWeatherForDays = async (lat: number, lon: number) => {
  const response = await fetch(
    `${ApiLink.weatherForDays}?locations=${lat},${lon}&aggregateHours=24&forecastDays=6&locationMode=single&iconSet=icons1&unitGroup=metric&shortColumnNames=true&contentType=json&key=${visualCrossingKey}`,
  )
  const data: IWeatherVisualCrossing = await response.json()

  return data
}

export const getWeatherByCityForDays = async (city: string) => {
  const response = await fetch(
    `${ApiLink.weatherForDays}?locations=${city}&aggregateHours=24&forecastDays=6&locationMode=single&iconSet=icons1&unitGroup=metric&shortColumnNames=true&contentType=json&key=${visualCrossingKey}`,
  )
  const data: IWeatherVisualCrossing = await response.json()

  return data
}
