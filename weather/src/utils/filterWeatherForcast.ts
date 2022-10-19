import { IOpenWeatherForcast } from '../api/types'
import { IfilterWeatherData } from './types'

export const filterWeatherForDays = (data: IOpenWeatherForcast) => {
  console.log(data.list[0].dt_txt)
  const currentDay = new Date().getDate()

  const weather: IfilterWeatherData[] = data.list.filter((el) => {
    return +el.dt_txt.slice(8, 10) === currentDay
  })

  return weather
}
