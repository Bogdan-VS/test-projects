import { useState } from 'react'

import { themes } from '@/theme/theme'
import { iconsData } from '@/constants/iconData'
import { CardsFilter, IData } from '@/utils/cardsFilter'

export const useSlider = (arr: IData, cardsLimit: number) => {
  const { black, grey, white } = themes.lightTheme.colors
  const { ArrowIcons } = iconsData

  const [koef, setKoef] = useState(0)
  const { limit, data } = CardsFilter(arr, cardsLimit, koef)
  const [incDisabled, setIncDisabled] = useState(koef >= limit - 1)
  const [decDisabled, setDecDisabled] = useState(true)

  const handleInc = () => {
    setKoef(koef + 1)

    if (koef === limit - 2) {
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

    if (koef <= limit) {
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
    data,
  }
}
