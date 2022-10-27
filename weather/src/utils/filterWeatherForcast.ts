import { IOpenWeatherForcast } from '../api/types'
import { IfilterWeatherData } from './types'

export const filterWeatherForDays = (data: IOpenWeatherForcast, coef: number) => {
  const currentDay = new Date().getDate()

  const weather: IfilterWeatherData[] = data.list.filter((el) => {
    return +el.dt_txt.slice(8, 10) === currentDay + coef
  })

  return weather
}

// export const filterDays = (data: IOpenWeatherForcast, coef: number)
