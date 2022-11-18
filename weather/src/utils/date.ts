export const getFinalDate = () => {
  const today = new Date()

  const year = today.getFullYear()
  const month = today.getMonth()
  const day = today.getDate()

  return new Date(year, month, day + 6)
}

export const getEventDate = (value: string) => {
  const data = new Date(value.slice(0, 19) + '.000Z').toUTCString()

  return { date: data.slice(0, 16), time: data.slice(16, 22) }
}
