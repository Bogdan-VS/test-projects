import { combineReducers } from 'redux'

import calculator from './calculator'
import errorBoundary from './errorBoundary'
import theme from './theme'

export const rootReducer = combineReducers({
  calculator,
  errorBoundary,
  theme,
})
