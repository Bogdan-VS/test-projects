import { handleActions } from 'redux-actions'

import {
  ADD_RESULT,
  INPUT_VALUE,
  FULL_CLEAR,
  CLEAR,
  CLEAR_RESULT,
} from '../actionCreators'

const INITIAL_STATE = {
  initValue: '0',
  result: '',
  expression: [],
}
