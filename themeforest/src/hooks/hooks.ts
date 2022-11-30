import { useState } from 'react'

import { themes } from '@/theme/theme'
import { iconsData } from '@/constants/iconData'

export const useSlider = () => {
  const { black, grey, white } = themes.lightTheme.colors
  const { ArrowIcons } = iconsData

  const [koef, setKoef] = useState(0)
  const [incDisabled, setIncDisabled] = useState(false)
  const [decDisabled, setDecDisabled] = useState(true)

  const handleInc = () => {
    setKoef(koef + 1)

    if (koef === 4) {
      setIncDisabled(true)
    }

    if (koef >= 0) {
      setDecDisabled(false)
    }
  }

  const handleDec = () => {
    setKoef(koef - 1)

    if (koef === 1) {
      setDecDisabled(true)
    }

    if (koef <= 5) {
      setIncDisabled(false)
    }
  }

  return {
    black,
    grey,
    white,
    ArrowIcons,
    incDisabled,
    decDisabled,
    handleDec,
    handleInc,
  }
}
