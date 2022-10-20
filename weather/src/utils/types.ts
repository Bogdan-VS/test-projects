export interface IfilterWeatherData {
  dt: number
  dt_txt: string
  main: { temp: number }
  weather: {
    description: string
    icon: string
  }[]
  wind: { speed: number }
}
