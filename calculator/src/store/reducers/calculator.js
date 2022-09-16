import { OPERATIONS } from '@/constants/buttons'
import { handleActions } from 'redux-actions'
import { typeActions } from '../actions/actionCreators'

const INITIAL_STATE = {
  initValue: '0',
  isSign: false,
  currentExpression: '',
  result: '',
  expression: [],
  historyOfExpression: [],
  isFullHistoryOpen: false,
  isHistoryOpen: true,
}

export default handleActions(
  {
    [typeActions.INPUT_VALUE]: (state, action) => {
      if (state.result) {
        return {
          ...state,
          initValue: OPERATIONS.includes(state.initValue.at(-1))
            ? state.result + state.initValue.at(-1)
            : state.result,
        }
      }

      return {
        ...state,
        initValue:
          state.initValue === '0' &&
          !OPERATIONS.includes(action.payload)
            ? action.payload
            : state.initValue + action.payload,
        currentExpression:
          state.initValue === '0'
            ? action.payload
            : state.currentExpression + action.payload,
      }
    },
    [typeActions.COUNT_EXP]: (state, action) => ({
      ...state,
      expression: [...state.expression, state.currentExpression],
      historyOfExpression: [
        ...state.historyOfExpression,
        state.currentExpression,
      ],
      result: action.payload,
    }),
    [typeActions.SWITCH_SIGN]: state => ({
      ...state,
      isSign: !state.isSign,
    }),
    [typeActions.RESET_SIGN]: state => ({
      ...state,
      isSign: false,
    }),
    [typeActions.TOGGLE_HISTORY]: state => ({
      ...state,
      isHistoryOpen: !state.isHistoryOpen,
    }),
    [typeActions.CHANGE_EXP]: (state, action) => ({
      ...state,
      initValue: action.payload,
    }),
    [typeActions.CHANGE_HISTORY]: (state, action) => ({
      ...state,
      currentExpression: action.payload,
    }),
    [typeActions.ADD_RESULT]: (state, action) => ({
      ...state,
      result: action.payload,
    }),
    [typeActions.CLEAR_RESULT]: state => ({
      ...state,
      result: '',
    }),
    [typeActions.CLEAR]: state => {
      if (state.initValue.length === 1)
        return { ...state, initValue: '0' }

      return {
        ...state,
        initValue: state.initValue.slice(
          0,
          state.initValue.length - 1,
        ),
      }
    },
    [typeActions.FULL_CLEAR]: state => ({
      ...state,
      initValue: '0',
      result: '',
    }),
    [typeActions.CLEAR_HISTORY]: state => ({
      ...state,
      expression: [],
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
