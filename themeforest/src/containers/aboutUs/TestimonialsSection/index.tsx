import React from 'react'

import SliderControls from '@/components/SliderControls'
import Subtitle from '@/components/Subtitle'
import { iconsData } from '@/constants/iconData'
import { ITestimonials } from '@/constants/interfaces'
import { useSlider } from '@/hooks/hooks'

import { TitleH2Styled } from '@/theme/styled'
import { TestimonialsContentStyled } from './styled'
import {
  BottomContainerStyled,
  CardContainerStyled,
  InfoContainerStyled,
  LogoContainerStyled,
  LogoStyled,
  SubtitleStyled,
  TestimonialsWrapperStyled,
  TitleStyled,
  TopContainerStyled,
} from '@/containers/home/HomeTestimonialsSection/styled'

const TestimonialsSection = () => {
  const { black, white, grey, incDisabled, decDisabled, handleDec, handleInc, ArrowIcons, data } =
    useSlider(iconsData.Testimonials, 2)
  return (
    <TestimonialsWrapperStyled>
      <TestimonialsContentStyled>
        <TopContainerStyled>
          <TitleH2Styled>What our customers say</TitleH2Styled>
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
          {(data as ITestimonials[]).map(({ id, logo, text, title, subtitle }) => (
            <CardContainerStyled key={id}>
              <LogoContainerStyled>
                <LogoStyled logo={logo} />
              </LogoContainerStyled>
              <Subtitle fontSize='16' width='470' lineHeight='28' text={text} />
              <InfoContainerStyled>
                <TitleStyled>{title}</TitleStyled>
                <SubtitleStyled>{subtitle}</SubtitleStyled>
              </InfoContainerStyled>
            </CardContainerStyled>
          ))}
        </BottomContainerStyled>
      </TestimonialsContentStyled>
    </TestimonialsWrapperStyled>
  )
}

export default TestimonialsSection
