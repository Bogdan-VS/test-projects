import React from 'react'
import { render, screen } from '@testing-library/react'

import Weather from '.'
import { IWeatherProps } from './interface'

const props: IWeatherProps = {
  temp: 6,
  icon: '04n',
  city: 'Zhlobin',
  weather: 'Clouds',
}

it('should render weather components', () => {
  render(<Weather {...props} />)

  expect(screen.getByText(/Zhlobin/i)).toBeInTheDocument()
  expect(screen.getByText(/6/i)).toBeInTheDocument()
  expect(screen.getByText(/Clouds/i)).toBeInTheDocument()
})
