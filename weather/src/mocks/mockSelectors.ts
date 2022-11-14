import { IInitStateLocation } from '@/store/types/locationTypes'

export const mockInitWeather: IInitStateLocation = {
  isWeatherForCast: true,
  errorSign: '',
  error: '',
  city: '',
  location: null,
  currentWeather: null,
  weatherForCast: null,
  weatherByDays: null,
  calendarEvents: null,
}

export const mockWeatherByIp = {
  isWeatherForCast: true,
  errorSign: '',
  error: '',
  city: 'Gomel',
  location: { latitude: 53, longitude: 30 },
  currentWeather: {
    name: 'Gomel',
    main: { temp: 7 },
    weather: [
      {
        icon: '40f',
        main: 'cloudy',
        description: 'strong cloudy',
      },
    ],
  },
  weatherForCast: {
    list: [
      {
        dt: 1667314800,
        dt_txt: new Date().toISOString(),
        main: {
          temp: 6.15,
        },
        wind: { speed: 2.43 },
        weather: [
          {
            icon: '04n',
            main: 'Clouds',
            description: 'overcast clouds',
          },
        ],
      },
    ],
  },
  weatherByDays: {
    location: {
      values: [
        {
          datetimeStr: new Date().toISOString(),
          temp: 7,
          icon: 'cloudy',
          wspd: 3.2,
        },
      ],
    },
  },
  calendarEvents: null,
}

export const mockCalendarEvents = {
  calendarEvents: {
    result: {
      items: [
        {
          id: '123',
          start: {
            dateTime: new Date().toISOString(),
          },
          summary: 'Codewars',
        },
      ],
    },
  },
}

export const mockWeatherForCast = {
  weatherForCast: {
    list: [
      {
        dt: 1667314800,
        dt_txt: new Date().toISOString(),
        main: {
          temp: 6.15,
        },
        wind: { speed: 2.43 },
        weather: [
          {
            icon: '04n',
            main: 'Clouds',
            description: 'overcast clouds',
          },
        ],
      },
      {
        dt: 1667314801,
        dt_txt: new Date().toISOString(),
        main: {
          temp: 6.15,
        },
        wind: { speed: 2.95 },
        weather: [
          {
            icon: '04n',
            main: 'Strong Clouds',
            description: 'strong clouds',
          },
        ],
      },
    ],
  },
}
