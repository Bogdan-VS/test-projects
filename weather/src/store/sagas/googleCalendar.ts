import { call, put, takeEvery } from 'redux-saga/effects'

import apiCalendar from '../../api/googleCalendarApi'
import { IErrorGoogleApi, IGoogleCalendar } from '../../api/types'
import { getFinalDate } from '../../utils/date'
import {
  getCalendarEventCreator,
  LocationAction,
  setErrorSignCreator,
} from '../actions/locationActions'

function* signInGoogleWorker() {
  yield call(apiCalendar.handleAuthClick)
}

function* signOutGoogleWorker() {
  yield call(apiCalendar.handleSignoutClick)
  yield put(getCalendarEventCreator(null))
}

function* getCalendar() {
  try {
    const data: IGoogleCalendar = yield call(apiCalendar.listEvents, {
      timeMin: new Date().toISOString(),
      timeMax: getFinalDate().toISOString(),
      showDeleted: true,
      maxResults: 10,
      orderBy: 'updated',
    })

    yield put(getCalendarEventCreator(data))
    yield put(setErrorSignCreator(''))
  } catch (error) {
    yield put(setErrorSignCreator((error as IErrorGoogleApi).result.error.message))
  }
}

export function* googleWatcher() {
  yield takeEvery(LocationAction.LOG_IN_GOOGLE, signInGoogleWorker)
  yield takeEvery(LocationAction.LOG_OUT_GOOGLE, signOutGoogleWorker)
  yield takeEvery(LocationAction.CALL_CALENDAR, getCalendar)
}
