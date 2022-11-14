import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import * as reduxHooks from 'react-redux'

import MainPage from '.'
import {
  mockCalendarEvents,
  mockInitWeather,
  mockWeatherByIp,
  mockWeatherForCast,
} from '@/mocks/mockSelectors'

jest.mock('react-redux')

const mockSelector = jest.spyOn(reduxHooks, 'useSelector')
const mockDispatch = jest.spyOn(reduxHooks, 'useDispatch')

describe('MainPage', () => {
  let dispatch: jest.Mock<unknown, unknown>

  beforeEach(() => {
    dispatch = jest.fn()
    mockDispatch.mockReturnValue(dispatch)
  })

  it('should render component', () => {
    mockSelector.mockReturnValue(mockInitWeather)

    render(<MainPage />)

    expect(screen.getByText(/calendar/i)).toBeInTheDocument()
    expect(screen.getByText(/Sign In/i)).toBeInTheDocument()
    expect(screen.getByText(/Sign Out/i)).toBeInTheDocument()
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument()
  })

  it('should render weather', async () => {
    mockSelector.mockReturnValue(mockWeatherByIp)

    render(<MainPage />)

    expect(screen.getAllByText(/7/i)[0]).toBeInTheDocument()
    expect(screen.getByText(/Gomel/i)).toBeInTheDocument()
    expect(screen.getAllByText(/cloudy/i)[0]).toBeInTheDocument()
    expect(screen.getByText(/overcast clouds/i)).toBeInTheDocument()
    expect(screen.getByText(/wind speed: 2.43/i)).toBeInTheDocument()
  })

  it('should render weather by city', () => {
    mockSelector.mockReturnValue({ city: 'Minsk' })

    render(<MainPage />)

    const input = screen.getByRole('textbox') as HTMLInputElement

    fireEvent.change(input, { target: { value: 'Minsk' } })
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(input.value).toBe('Minsk')

    fireEvent.change(input, { target: { value: 'Gomel' } })
    expect(dispatch).toHaveBeenCalledTimes(2)
  })

  it('should render weather by sity with mistake', () => {
    mockSelector.mockReturnValue({ city: '111', error: 'Uncorrect value' })

    render(<MainPage />)

    const form = screen.getByRole('form') as HTMLFormElement

    fireEvent.submit(form)

    expect(screen.getByText(/uncorrect value/i)).toBeInTheDocument()
    expect(dispatch).toHaveBeenCalledTimes(2)
  })

  it('should render weather with changing city', () => {
    mockSelector.mockReturnValue(mockWeatherByIp)

    render(<MainPage />)

    const form = screen.getByRole('form') as HTMLFormElement
    const click = screen.getByText(/Switch weather/i) as HTMLButtonElement

    fireEvent.submit(form)
    expect(screen.getByText(/Gomel/i)).toBeInTheDocument()

    fireEvent.click(click)
    expect(dispatch).toHaveBeenCalledTimes(5)
  })

  it('should render error after geting empty array of google calendar', async () => {
    mockSelector.mockReturnValue({ errorSign: 'Error' })

    render(<MainPage />)

    const click = screen.getByText(/Calendar/) as HTMLButtonElement

    expect(
      screen.getByText(/The events of calendar will be access after registration/i),
    ).toBeInTheDocument()

    fireEvent.click(click)
    expect(dispatch).toHaveBeenCalledTimes(2)
    await waitFor(() => expect(dispatch).toHaveBeenCalledTimes(2))
  })

  it('should render calendar events', () => {
    mockSelector.mockReturnValue(mockCalendarEvents)

    render(<MainPage />)

    const clickIn = screen.getByText(/sign in/i) as HTMLButtonElement
    const clickOut = screen.getByText(/sign out/i) as HTMLButtonElement
    fireEvent.click(clickIn)

    expect(dispatch).toHaveBeenCalledTimes(2)
    expect(screen.getByText(/Codewars/i)).toBeInTheDocument()

    fireEvent.click(clickOut)
    expect(dispatch).toHaveBeenCalledTimes(3)
  })

  it('should render weather by click on switch weather button', () => {
    mockSelector.mockReturnValue(mockWeatherForCast)

    render(<MainPage />)

    const click = screen.getByText(/⇨/) as HTMLButtonElement

    fireEvent.click(click)
  })
})
