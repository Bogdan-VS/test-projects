// import { all, fork } from 'redux-saga/effects'
import { watcherLocationSaga } from './locationSaga'

function* rootSaga() {
  yield watcherLocationSaga()
}

export default rootSaga
