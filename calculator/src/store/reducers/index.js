import { combineReducers } from 'redux'

import calculator from './calculator'
import errorBoundary from './errorBoundary'

export const rootReducer = combineReducers({
  calculator,
  errorBoundary,
})
