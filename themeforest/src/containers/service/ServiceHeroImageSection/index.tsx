import React from 'react'

import Subtitle from '@/components/Subtitle'

import {
  BottomContainerStyled,
  HeroImageContentStyled,
  HeroImageWrapperStyled,
  LogoStyled,
  TitleStyled,
  TopContainerStyled,
  TopTitleStyled,
} from './styled'

const ServiceHeroImageSection = () => (
  <HeroImageWrapperStyled>
    <HeroImageContentStyled>
      <TopContainerStyled>
        <TopTitleStyled>Home</TopTitleStyled>
        <TopTitleStyled>|</TopTitleStyled>
        <TopTitleStyled>Services</TopTitleStyled>
      </TopContainerStyled>
      <BottomContainerStyled>
        <LogoStyled>Services</LogoStyled>
        <TitleStyled>Data Analytics Services</TitleStyled>
        <Subtitle
          fontSize='20'
          width='730'
          lineHeight='33'
          text='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore.'
        />
      </BottomContainerStyled>
    </HeroImageContentStyled>
  </HeroImageWrapperStyled>
)

export default ServiceHeroImageSection
