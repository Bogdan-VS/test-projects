import React from 'react'

import { darkTheme } from '@/theme'

import { Loader } from './components'

const LOADER_SIZE = 100

export default () => {
  return (
    <Loader
      type="Bars"
      color={darkTheme.colors.secondary}
      height={LOADER_SIZE}
      width={LOADER_SIZE}
    />
  )
}
