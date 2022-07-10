import { css } from 'styled-components'

const font = 'sans-serif'

// Color palette
const black = '#000000'
const white = '#ffffff'
const error = '#c86464'
const primary = '#c06c84'
const secondary = '#6c5b7b'
const secondaryLight = '#6a6b7b'

const boxShadows = [
  'box-shadow: 0px 4px 24px -8px rgba(0,0,0,0.75)',
]

const size = {
  xs: 550,
  small: 768,
  med: 992,
  large: 1200,
}

const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

const below = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export default {
  above,
  below,
  boxShadows,
  font,
  spaces: [0, 4, 8, 16, 32, 64, 128],
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 56, 72, 80],
  colors: {
    primary,
    secondary,
    secondaryLight,
    black,
    white,
    error,
  },
}

export const lightTheme = {
  colors: {
    bgPrimary: '#fac87c',
    bgSecondary: '#ececd4',
    textPrimary: '#048fa1',
    digitBtn: '#e4ff07',
    line: '#49758b',
    text: '#990f04',
    error: '#c86464',
    black: '#000000',
    white: '#ffffff',
    switchBtnPrimary: '#eed3ca',
  },
  font: 'sans-serif',
  isLight: true,
  boxShadow:
    '0px 0px 10px 6px rgb(213, 177, 177, 0.25) inset',
}

export const darkTheme = {
  colors: {
    bgPrimary: '#363f48',
    bgSecondary: '#d1d1d1',
    textPrimary: '#a52a2a',
    text: '#990f04',
    error: '#c86464',
    black: '#000000',
    white: '#ffffff',
    switchBtnPrimary: '#607d8b',
  },
  font: 'sans-serif',
  isLight: false,
  boxShadow:
    '0px 0px 10px 6px rgba(255, 255, 255, 0.25) inset',
}
