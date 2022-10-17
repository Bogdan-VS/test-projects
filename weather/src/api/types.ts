export interface IIpAPi {
  latitude: number
  longitude: number
}

export interface IOpenWeatherMap {
  name: string
  main: { temp: number }
  weather: [
    {
      main: string
      icon: string
    },
  ]
}
