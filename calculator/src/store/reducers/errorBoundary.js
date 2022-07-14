import { handleActions } from 'redux-actions'
import { HAS_ERROR } from '../actionCreators'

const INITIAL_STATE = {
  hasError: false,
}

export default handleActions(
  {
    [HAS_ERROR]: (state, action) => {
      return {
        ...state,
        hasError: true,
      }
    },
  },
  INITIAL_STATE,
)
