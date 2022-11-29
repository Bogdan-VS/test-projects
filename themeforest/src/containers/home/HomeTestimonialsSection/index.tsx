import SliderControls from '@/components/SliderControls'
import Subtitle from '@/components/Subtitle'
import { iconsData } from '@/constants/iconData'
import { themes } from '@/theme/theme'
import React, { useEffect, useState } from 'react'
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

const HomeTestimonialsSection = () => {
  const { black, grey, white } = themes.lightTheme.colors
  const { ArrowIcons } = iconsData

  const [koef, setKoef] = useState(0)
  const [incDisabled, setIncDisabled] = useState(false)
  const [decDisabled, setDecDisabled] = useState(true)

  useEffect(() => {
    console.log('left: ', decDisabled, 'right: ', incDisabled, koef)
  }, [incDisabled, decDisabled, koef])

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
          {iconsData.Testimonials.map(({ logo, text, title, subtitle, id }) => (
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
