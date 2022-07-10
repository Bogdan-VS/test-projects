import { handleActions } from 'redux-actions'

import { lightTheme } from '@/theme'
import { CHANGE_THEME, CHECK_THEME } from '../actionCreators'

const INITIAL_STATE = {
  theme: lightTheme,
  isLightTheme: true,
}

export default handleActions(
  {
    [CHANGE_THEME]: (state, action) => ({
      ...state,
      theme: action.payload,
    }),
    [CHECK_THEME]: (state, action) => ({
      ...state,
      isLightTheme: !state.isLightTheme,
    }),
  },
  INITIAL_STATE,
)
