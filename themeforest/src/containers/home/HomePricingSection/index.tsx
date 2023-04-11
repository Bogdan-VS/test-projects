import React from 'react'

import Price from '@/components/Price'
import { iconsData } from '@/constants/iconData'
import { themes } from '@/theme/theme'

import {
  PricingContentStyled,
  PricingWrapperStyled,
  SubtitleContainerStyled,
  TitleStyled,
} from './styled'

const HomePricingSection = () => {
  const { colors } = themes.lightTheme
  const { free, lite, basic, enterprises } = iconsData.ServicesPoints

  return (
    <PricingWrapperStyled>
      <PricingContentStyled>
        <TitleStyled>Our pricing</TitleStyled>
        <SubtitleContainerStyled>
          <Price
            title='Free trial'
            price='$00'
            bg={colors.primary}
            color={colors.white}
            colorText={colors.black}
            data={free}
            bgHover={colors.primery_hover}
            bgMain={colors.white}
            colorHover={colors.helper_blue_3}
          />
          <Price
            title='Lite'
            price='$99'
            bg={colors.primary}
            color={colors.white}
            colorText={colors.black}
            data={lite}
            bgHover={colors.primery_hover}
            bgMain={colors.white}
            colorHover={colors.helper_blue_3}
          />
          <Price
            title='Basic'
            price='$00'
            bg={colors.white}
            color={colors.primary}
            colorText={colors.white}
            data={basic}
            bgHover={colors.helper_blue_3}
            bgMain={colors.primary}
            colorHover={colors.primery_hover}
          />
          <Price
            title='For enterprises'
            price='Custom'
            bg={colors.primary}
            color={colors.white}
            colorText={colors.black}
            data={enterprises}
            bgHover={colors.primery_hover}
            bgMain={colors.white}
            colorHover={colors.helper_blue_3}
          />
        </SubtitleContainerStyled>
      </PricingContentStyled>
    </PricingWrapperStyled>
  )
}

export default HomePricingSection
