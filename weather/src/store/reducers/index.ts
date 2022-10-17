import { combineReducers } from 'redux'
import locationReducer from './location'

const rootReducer = combineReducers({
  location: locationReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
