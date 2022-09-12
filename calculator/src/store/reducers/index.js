import { combineReducers } from 'redux'

import calculator from './calculator'
import errorBoundary from './errorBoundary'
import settings from './settings'

export const rootReducer = combineReducers({
  calculator,
  errorBoundary,
  settings,
})
