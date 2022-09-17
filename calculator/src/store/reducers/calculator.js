import { handleActions } from 'redux-actions'
import { typeActions } from '../actions/actionCreators'

const INITIAL_STATE = {
  currentResult: '0',
  tempValue: '',
  currentHistory: [],
  fullHistory: [],
  inputValue: '0',
  isSign: true,
  isFullHistoryOpen: false,
  isHistoryOpen: true,
}

export default handleActions(
  {
    [typeActions.ADD_CURRENT_RESULT]: (state, action) => ({
      ...state,
      currentResult: action.payload,
    }),
    [typeActions.ADD_TEMP_VALUE]: (state, action) => ({
      ...state,
      tempValue: action.payload,
    }),
    [typeActions.CLEAR_TEMP_VALUE]: state => ({
      ...state,
      tempValue: '',
    }),
    [typeActions.ADD_CURRENT_HISTORY]: (state, action) => ({
      ...state,
      currentHistory: [...state.currentHistory, action.payload],
      fullHistory: [...state.fullHistory, action.payload],
    }),
    [typeActions.INPUT_VALUE]: (state, action) => ({
      ...state,
      inputValue: state.inputValue + action.payload,
    }),
    [typeActions.CLEAR_HISTORY]: state => ({
      ...state,
      currentHistory: [],
      inputValue: '',
    }),
    [typeActions.CHANGE_EXP]: (state, action) => ({
      ...state,
      inputValue: action.payload,
    }),
    [typeActions.CLEAR_INPUT_VALUE]: state => ({
      ...state,
      inputValue: '0',
    }),
    [typeActions.SWITCH_SIGN]: state => ({
      ...state,
      isSign: !state.isSign,
    }),
    [typeActions.RESET_SIGN]: state => ({
      ...state,
      isSign: true,
    }),
    [typeActions.TOGGLE_HISTORY]: state => ({
      ...state,
      isHistoryOpen: !state.isHistoryOpen,
    }),
    [typeActions.TOGGLE_FULL_HISTORY]: state => ({
      ...state,
      isFullHistoryOpen: !state.isFullHistoryOpen,
    }),
    [typeActions.CLEAR_ALL_HISTORY]: () => ({
      ...INITIAL_STATE,
    }),
  },
  INITIAL_STATE,
)
