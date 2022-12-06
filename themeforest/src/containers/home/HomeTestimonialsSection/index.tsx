import React from 'react'

import { useSlider } from '@/hooks/hooks'
import SliderControls from '@/components/SliderControls'
import Subtitle from '@/components/Subtitle'
import { iconsData } from '@/constants/iconData'

import {
  BottomContainerStyled,
  CardContainerStyled,
  InfoContainerStyled,
  LogoContainerStyled,
  LogoStyled,
  SubtitleStyled,
  TestimonialsContentStyled,
  TestimonialsWrapperStyled,
  TitleContainerStyled,
  TitleStyled,
  TopContainerStyled,
  TopTitleStyled,
} from './styled'
import { ITestimonials } from '@/constants/interfaces'

const HomeTestimonialsSection = () => {
  const { black, white, grey, incDisabled, decDisabled, handleDec, handleInc, ArrowIcons, data } =
    useSlider(iconsData.Testimonials, 3)

  return (
    <TestimonialsWrapperStyled>
      <TestimonialsContentStyled>
        <TopContainerStyled>
          <TopTitleStyled>Testimonials </TopTitleStyled>
          <SliderControls
            handleInc={handleInc}
            handleDec={handleDec}
            incDisabled={incDisabled}
            decDisabled={decDisabled}
            dLeft={ArrowIcons.leftArrow_24}
            dRight={ArrowIcons.rightArrow_24}
            color={black}
            colorHover={white}
            colorDisabled={grey}
          />
        </TopContainerStyled>
        <BottomContainerStyled>
          {(data as ITestimonials[]).map(({ logo, text, title, subtitle, id }) => (
            <CardContainerStyled key={id}>
              <TitleContainerStyled>
                <LogoContainerStyled>
                  <LogoStyled logo={logo} />
                </LogoContainerStyled>
                <InfoContainerStyled>
                  <TitleStyled>{title}</TitleStyled>
                  <SubtitleStyled>{subtitle}</SubtitleStyled>
                </InfoContainerStyled>
              </TitleContainerStyled>
              <Subtitle fontSize='16' width='280' lineHeight='28' text={text} />
            </CardContainerStyled>
          ))}
        </BottomContainerStyled>
      </TestimonialsContentStyled>
    </TestimonialsWrapperStyled>
  )
}

export default HomeTestimonialsSection
