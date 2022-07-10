import { createGlobalStyle } from 'styled-components'
import { lightTheme } from './theme'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: ${lightTheme.font};
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  body {
    & > #root {
      width: 100%;
      height: 100%;
    }
  }

  body {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  #root {
    background: ${lightTheme.colors.bgPrimary};
  }
`
