import React from 'react'
import renderer from 'react-test-renderer'

import WeatherByDays, { IWeatherByDaysProps } from '.'

const props: IWeatherByDaysProps = {
  date: '2022-11-01T00:00:00+03:00',
  temp: 7,
  icon: 'cloudy',
  wind: 6.2,
}

it('Display WeatherByDays component', () => {
  const component = renderer.create(<WeatherByDays {...props} />).toJSON()

  expect(component).toMatchInlineSnapshot(`
    <div
      className="sc-bcXHqe"
    >
      <h3
        className="sc-dkrFOg dCeDJq"
      >
        Mon, 31 Oct 2022
      </h3>
      <div
        className="sc-gswNZR idKfqV"
      >
        <h4
          className="sc-hLBbgP"
        >
          7°
        </h4>
        <div
          className="sc-eDvSVe juWxTM"
        >
          <span
            className="sc-jSUZER caMoIz"
          />
        </div>
        <div
          className="sc-gKPRtg"
        >
          <p
            className="sc-iBYQkv"
          >
            cloudy
          </p>
          <p
            className="sc-ftTHYK"
          >
            wind speed: 6.2 m/s
          </p>
        </div>
      </div>
    </div>
  `)
})
