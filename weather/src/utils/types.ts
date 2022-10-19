export interface IfilterWeatherData {
  dt: number
  main: { temp: number }
  weather: {
    description: string
    icon: string
  }[]
  wind: { speed: number }
}
