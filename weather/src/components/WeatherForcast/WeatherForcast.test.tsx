import React from 'react'
import renderer from 'react-test-renderer'

import WeatherForcast, { IWeatherForcastProps } from '.'

const props: IWeatherForcastProps = {
  temp: 2.11,
  wind: 6.07,
  icon: '04n',
  description: 'overcast clouds',
  time: '2022-11-01 18:00:00',
}

it('Display WeatherForcast component', () => {
  const component = renderer.create(<WeatherForcast {...props} />).toJSON()

  expect(component).toMatchInlineSnapshot(`
    <div
      className="sc-bcXHqe lelDff"
    >
      <h3
        className="sc-gswNZR wlhdo"
      >
        2°
      </h3>
      <div
        className="sc-dkrFOg jVVALV"
      >
        <span
          className="sc-hLBbgP jjkcmh"
        />
      </div>
      <div
        className="sc-jSUZER cLQhTA"
      >
        <h4
          className="sc-gKPRtg bVHpQQ"
        >
          overcast clouds
        </h4>
        <p
          className="sc-iBYQkv bdJrpf"
        >
          wind speed: 6.07 m/s
        </p>
      </div>
      <span
        className="sc-eDvSVe flHQlm"
      >
        18:00
      </span>
    </div>
  `)
})
