import ApiCalendar from 'react-google-calendar-api'

import { GoogleCalendar } from './constants'

const config = {
  clientId: GoogleCalendar.REACT_APP_CALENDAR_ID,
  apiKey: GoogleCalendar.REACT_APP_GOOGLE_API_KEY,
  scope: 'https://www.googleapis.com/auth/calendar',
  discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
}

export default new ApiCalendar(config)
