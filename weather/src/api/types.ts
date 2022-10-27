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

export interface IWeatherVisualCrossing {
  location: {
    values: {
      datetimeStr: string
      temp: number
      icon: string
      wspd: number
    }[]
  }
}

export interface IError {
  cod: string
  message: string
}

export interface IErrorVisualCrossing {
  errorCode: number
  message: string
}

export interface IGoogleCalendar {
  result: {
    items: {
      id: string
      start: {
        dateTime: string
      }
      summary: string
    }[]
  }
}
