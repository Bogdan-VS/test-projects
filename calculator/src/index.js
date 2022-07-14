import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

import { store } from '@/store/store'
import { ThemeWrapper } from './ThemeWrapper'

ReactDOM.render(
  <Provider store={store}>
    <ThemeWrapper />
  </Provider>,
  document.getElementById('root'),
)
