import { getFinalDate, getEventDate } from './date'

test('Check getFinalDate', () => {
  const date = new Date()

  expect(getFinalDate()).toStrictEqual(
    new Date(date.getFullYear(), date.getMonth(), date.getDate() + 6),
  )
})

test('Check getEventDate', () => {
  const mockDate = '2022-10-31T22:30:00+03:00'

  expect(getEventDate(mockDate)).toStrictEqual({ date: 'Mon, 31 Oct 2022', time: ' 22:30' })
})
