import { IOpenWeatherForcast } from '../api/types'
import { IfilterWeatherData } from './types'

export const filterWeatherForDays = (data: IOpenWeatherForcast, coef: number) => {
  const today = new Date()

  const year = today.getFullYear()
  const month = today.getMonth()
  const day = today.getDate()

  const date = new Date(year, month, day + coef + 1).toISOString()

  const weather: IfilterWeatherData[] = data.list.filter((el) => {
    return el.dt_txt.slice(0, 10) === date.slice(0, 10)
  })

  return weather
}
