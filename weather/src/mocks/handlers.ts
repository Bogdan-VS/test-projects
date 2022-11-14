import { ApiLink, openWeatherKey, visualCrossingKey } from '@/api/constants'
import { IIpAPi, IOpenWeatherForcast, IOpenWeatherMap, IWeatherVisualCrossing } from '@/api/types'
import { rest } from 'msw'

const lat = 53
const lon = 30

export const handlers = [
  rest.get<IIpAPi>(`${ApiLink.ipapi}`, (req, res, ctx) => {
    return res(
      ctx.json({
        latitude: 52,
        longitude: 30,
        city: 'Gomel',
      }),
    )
  }),

  rest.get<IOpenWeatherMap>(`${ApiLink.currentWeather}`, (req, res, ctx) => {
    const queryParams = req.url.searchParams.getAll('units', 'lat', 'lon', 'appid')

    return res(
      ctx.json({
        queryParams,
        name: 'Gomel',
        main: { temp: 7 },
        weather: [
          {
            icon: '40f',
            main: 'cloudy',
            description: 'strong cloudy',
          },
        ],
      }),
    )
  }),

  rest.get<IOpenWeatherForcast>(`${ApiLink.weatherForHours}`, (req, res, ctx) => {
    return res(
      ctx.json({
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
      }),
    )
  }),

  rest.get<IWeatherVisualCrossing>(`${ApiLink.weatherForDays}`, (req, res, ctx) => {
    return res(
      ctx.json({
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
      }),
    )
  }),
]
