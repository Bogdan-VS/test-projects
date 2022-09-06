import { handleActions } from 'redux-actions'

import { typeActions } from '../actionCreators'

const INITIAL_STATE = {
  initValue: '0',
  result: '',
  expression: [],
  historyOfExpression: [],
  isFullHistoryOpen: false,
}

export default handleActions(
  {
    [typeActions.INPUT_VALUE]: (
      state,
      action,
    ) => {
      if (state.result) {
        return {
          ...state,
          expression: [
            ...state.expression,
            state.initValue.slice(
              0,
              state.initValue.length - 1,
            ),
          ],
          historyOfExpression: [
            ...state.historyOfExpression,
            state.initValue,
          ],
          initValue:
            state.result +
            state.initValue[
              state.initValue.length - 1
            ],
        }
      }

      return {
        ...state,
        initValue:
          state.initValue === '0'
            ? action.payload
            : state.initValue + action.payload,
      }
    },
    [typeActions.COUNT_EXP]: (state, action) => ({
      ...state,
      expression: [
        ...state.expression,
        state.initValue,
      ],
      historyOfExpression: [
        ...state.historyOfExpression,
        state.initValue,
      ],
      initValue: action.payload,
    }),
    [typeActions.ADD_RESULT]: (state, action) => {
      return {
        ...state,
        result: action.payload,
      }
    },
    [typeActions.CLEAR_RESULT]: (
      state,
      action,
    ) => {
      return {
        ...state,
        result: '',
      }
    },
    [typeActions.CLEAR]: (state, action) => {
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
    [typeActions.FULL_CLEAR]: (
      state,
      action,
    ) => ({
      ...state,
      initValue: '0',
      result: '',
    }),
    [typeActions.CLEAR_HISTORY]: (
      state,
      action,
    ) => ({
      ...state,
      expression: [],
    }),
    [typeActions.TOGGLE_FULL_HISTORY]: (
      state,
      action,
    ) => ({
      ...state,
      isFullHistoryOpen: !state.isFullHistoryOpen,
    }),
    [typeActions.CLEAR_ALL_HISTORY]: (
      state,
      action,
    ) => ({
      ...INITIAL_STATE,
    }),
  },
  INITIAL_STATE,
)
