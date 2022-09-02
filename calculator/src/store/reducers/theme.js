import { handleActions } from 'redux-actions'

import { themes } from '@/theme'

import {
  typeActions,
} from '../actionCreators'

const INITIAL_STATE = {
  theme: themes.lightTheme,
  currentTheme: 'lightTheme',
}

export default handleActions(
  {
    [typeActions.CHANGE_THEME]: (state, action) => ({
      ...state,
      theme: action.payload,
    }),
    [typeActions.ADD_CURRENT_THEME]: (state, action) => ({
      ...state,
      currentTheme: action.payload,
    }),
  },
  INITIAL_STATE,
)
