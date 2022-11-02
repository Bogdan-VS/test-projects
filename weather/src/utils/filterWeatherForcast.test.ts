import { IOpenWeatherForcast } from '../api/types'
import { IfilterWeatherData } from './types'
import { filterWeatherForDays } from './filterWeatherForcast'

const mockData: IOpenWeatherForcast = {
  list: [
    {
      dt: 1667314800,
      dt_txt: '2022-11-01 15:00:00',
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
}

const mockFilterData: IfilterWeatherData[] = [
  {
    dt: 1667314800,
    dt_txt: '2022-11-01 15:00:00',
    main: { temp: 6.15 },
    weather: [
      {
        description: 'overcast clouds',
        main: 'Clouds',
        icon: '04n',
      },
    ],
    wind: { speed: 2.43 },
  },
]

const mockKoef = 0

test('Check filterWeatherForDays', () => {
  expect(filterWeatherForDays(mockData, mockKoef)).toStrictEqual(mockFilterData)
})
