import { testSaga } from 'redux-saga-test-plan'

import {
  getCalendar,
  googleWatcher,
  signInGoogleWorker,
  signOutGoogleWorker,
} from './googleCalendar'
import apiCalendar from '@/api/googleCalendarApi'
import { LocationAction } from '../actions/locationActions'
import { getFinalDate } from '@/utils/date'

describe('testing googleCalendar saga', () => {
  it('should execute function signInGoogleWorker', () => {
    const saga = testSaga(signInGoogleWorker)

    saga.next().call(apiCalendar.handleAuthClick)
    saga.next().isDone()
  })

  it('should execute function signOutGoogleWorker', () => {
    const saga = testSaga(signOutGoogleWorker)

    saga.next().call(apiCalendar.handleSignoutClick)
    saga.next().put({
      type: LocationAction.GET_CALENDAR_EVENTS,
      payload: null,
    })
    saga.next().isDone()
  })

  it('should execute function getCalendar with success', () => {
    const saga = testSaga(getCalendar)
    const mockEventsSettings = {
      timeMin: new Date().toISOString(),
      timeMax: getFinalDate().toISOString(),
      showDeleted: true,
      maxResults: 10,
      orderBy: 'updated',
    }
    const mockEventsData = [{ event: 'solve codewars', time: '10.00-12.00' }]

    saga.next().call(apiCalendar.listEvents, mockEventsSettings)
    saga.next(mockEventsData).put({
      type: LocationAction.GET_CALENDAR_EVENTS,
      payload: mockEventsData,
    })
    saga.next('').put({
      type: LocationAction.SET_ERROR_SIGN,
      payload: '',
    })
    saga.next().isDone()
  })

  it('should execute function getCalendar with error', () => {
    const saga = testSaga(getCalendar)
    const errorMessage = 'Registration error'
    const error = { result: { error: { message: errorMessage } } }

    saga.next().throw(error).put({
      type: LocationAction.SET_ERROR_SIGN,
      payload: error.result.error.message,
    })
    saga.next().isDone()
  })

  it('should execute function googleWatcher', () => {
    const saga = testSaga(googleWatcher)

    saga.next().takeEvery(LocationAction.LOG_IN_GOOGLE, signInGoogleWorker)
    saga.next().takeEvery(LocationAction.LOG_OUT_GOOGLE, signOutGoogleWorker)
    saga.next().takeEvery(LocationAction.CALL_CALENDAR, getCalendar)
    saga.next().isDone()
  })
})
