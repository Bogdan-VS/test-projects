import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

import { store } from '@/store/store'
import Application from '@/App'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('root'),
)
