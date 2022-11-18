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

export const checkCityName = (city: string) => {
  const alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ]

  return city.split('').some((el) => !alphabet.includes(el.toUpperCase()))
}
