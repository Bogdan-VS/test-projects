import React from 'react'
import { render, screen } from '@testing-library/react'

import WeatherByDays from '.'
import { IWeatherByDaysProps } from './interface'

const props: IWeatherByDaysProps = {
  date: '2022-11-01T00:00:00+03:00',
  temp: 7,
  icon: 'cloudy',
  wind: 6.2,
}

it('shiuld render WeatherByDays component', () => {
  render(<WeatherByDays {...props} />)

  expect(screen.getByText(/Mon, 31 Oct 2022/i)).toBeInTheDocument()
  expect(screen.getByText(/7/i)).toBeInTheDocument()
  expect(screen.getByText(/cloudy/i)).toBeInTheDocument()
  expect(screen.getByText(/6.2/i)).toBeInTheDocument()
})
