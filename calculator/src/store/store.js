import { createStore } from 'redux'

import {
  persistStore,
  persistReducer,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

import { createFilter } from 'redux-persist-transform-filter'

import { rootReducer } from './reducers'

const saveSubsetFilter = createFilter(
  'calculator',
  ['historyOfExpression'],
)

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['settings', 'calculator'],
  transforms: [saveSubsetFilter],
  stateReconciler: autoMergeLevel2,
}

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer,
)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)
