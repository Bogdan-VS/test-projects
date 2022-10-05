import React from 'react'

import ToastSettings from './containers/ToastSettings'

import GlobalStyles from './globalStyles/globalStyles'
import { Toast } from './components/Toast'

function App() {
  return (
    <div>
      <ToastSettings />
      <GlobalStyles />
    </div>
  )
}

export default App
