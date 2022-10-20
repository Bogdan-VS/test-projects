export interface IIpAPi {
  latitude: number
  longitude: number
  city: string
}

export interface IOpenWeatherMap {
  name: string
  main: { temp: number }
  weather: [
    {
      icon: string
      main: string
      description: string
    },
  ]
}

export interface IOpenWeatherForcast {
  list: {
    dt: number
    dt_txt: string
    main: { temp: number }
    wind: { speed: number }
    weather: {
      icon: string
      main: string
      description: string
    }[]
  }[]
}

export interface IError {
  cod: string
  message: string
}
