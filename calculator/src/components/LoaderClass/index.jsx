import React, { Component } from 'react'

import { themes } from '@/theme'

import { Loader } from './components'

const LOADER_SIZE = 100

export default class LoaderClass extends Component {
  render() {
    return (
      <Loader
        type="Bars"
        color={themes.darkTheme.colors.secondary}
        height={LOADER_SIZE}
        width={LOADER_SIZE}
      />
    )
  }
}
