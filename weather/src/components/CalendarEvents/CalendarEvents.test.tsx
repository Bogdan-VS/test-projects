import React from 'react'
import { render, screen } from '@testing-library/react'

import CalendarEvents from '.'
import { ICalendarEventsProps } from './interface'

const props: ICalendarEventsProps = {
  title: 'Make codewars',
  date: '2022-11-01T21:30:00+03:00',
}

it('Display CalendarEvents component', () => {
  render(<CalendarEvents {...props} />)

  expect(screen.getByText(/Make codewars/i)).toBeInTheDocument()
  expect(screen.getByText(/21:30/i)).toBeInTheDocument()
})
