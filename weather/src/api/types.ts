export interface IIpAPi {
  latitude: number
  longitude: number
}

export interface IOpenWeatherMap {
  city: { name: string }
  list: {
    main: { temp: number }
    weather: [
      {
        icon: string
        main: string
        description: string
      },
    ]
  }[]
}
