import { handleActions } from 'redux-actions'
import { typeActions } from '../actionCreators'

const INITIAL_STATE = {
  hasError: false,
}

export default handleActions(
  {
    [typeActions.HAS_ERROR]: (state, action) => {
      return {
        ...state,
        hasError: true,
      }
    },
  },
  INITIAL_STATE,
)
