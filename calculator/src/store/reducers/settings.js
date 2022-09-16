import { handleActions } from 'redux-actions'

import { themes } from '@/theme/theme'

import { typeActions } from '../actions/actionCreators'

const INITIAL_STATE = {
  theme: themes.lightTheme,
  currentTheme: 'lightTheme',
  isFunComponents: true,
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
    [typeActions.SWITCH_COMPONENTS]: state => ({
      ...state,
      isFunComponents: !state.isFunComponents,
    }),
  },
  INITIAL_STATE,
)
