import React from 'react'
import renderer from 'react-test-renderer'

import Weather from '.'
import { IWeatherProps } from './interface'

const props: IWeatherProps = {
  temp: 6,
  icon: '04n',
  city: 'Zhlobin',
  weather: 'Clouds',
}

it('Display weather components', () => {
  const component = renderer.create(<Weather {...props} />).toJSON()

  expect(component).toMatchInlineSnapshot(`
    <div
      className="sc-bcXHqe cXthlW"
    >
      <h3
        className="sc-gswNZR dGmjPe"
      >
        6°
      </h3>
      <div
        className="sc-dkrFOg gzfGJn"
      >
        <h3
          className="sc-hLBbgP hYsGWb"
        />
        <p
          className="sc-eDvSVe cdtZTk"
        />
        <span
          className="sc-jSUZER hQzvrN"
        />
      </div>
    </div>
  `)
})
