import React from 'react'
import { render, screen } from '@testing-library/react'

import WeatherForcast from '.'
import { IWeatherForcastProps } from './interface'

const props: IWeatherForcastProps = {
  temp: 2.11,
  wind: 6.07,
  icon: '04n',
  description: 'overcast clouds',
  time: '2022-11-01 18:00:00',
}

it('should render WeatherForcast component', () => {
  render(<WeatherForcast {...props} />)

  expect(screen.getByText(/2/i)).toBeInTheDocument()
  expect(screen.getByText(/6.07/i)).toBeInTheDocument()
  expect(screen.getByText(/overcast clouds/i)).toBeInTheDocument()
  expect(screen.getByText(/18:00/i)).toBeInTheDocument()
})
