import React from 'react'
import renderer from 'react-test-renderer'

import CalendarEvents from '.'
import { ICalendarEventsProps } from './interface'

const props: ICalendarEventsProps = {
  title: 'Make codewars',
  date: '2022-11-01T21:30:00+03:00',
}

it('Display CalendarEvents component', () => {
  const component = renderer.create(<CalendarEvents {...props} />).toJSON()

  expect(component).toMatchInlineSnapshot(`
    <div
      className="sc-bcXHqe"
    >
      <h3
        className="sc-gswNZR kcxGmB"
      >
        Make codewars
      </h3>
      <p
        className="sc-dkrFOg"
      >
        Tue, 01 Nov 2022
      </p>
      <p
        className="sc-dkrFOg"
      >
        Time:  21:30
      </p>
    </div>
  `)
})
