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

export default handleActions(
  {
    [INPUT_VALUE]: (state, action) => {
      if (state.result) {
        console.log(state.initValue)
        return {
          ...state,
          expression: [
            ...state.expression,
            state.initValue,
          ],
          initValue: state.result,
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
    [ADD_RESULT]: (state, action) => {
      return {
        ...state,
        result: action.payload,
      }
    },
    [CLEAR_RESULT]: (state, action) => {
      return {
        ...state,
        result: '',
      }
    },
    [CLEAR]: (state, action) => {
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
    [FULL_CLEAR]: (state, action) => ({
      ...INITIAL_STATE,
    }),
  },
  INITIAL_STATE,
)
