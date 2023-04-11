import React from 'react'

import {
  AboutUsContentStyled,
  AboutUsWrapperStyled,
  SubtitleContainerStyled,
  SubtitleStyled,
  TitleStyled,
} from './styled'

const AboutUsHeroImage = () => (
  <AboutUsWrapperStyled>
    <AboutUsContentStyled>
      <TitleStyled>About Us</TitleStyled>
      <SubtitleContainerStyled>
        <SubtitleStyled>Home</SubtitleStyled>
        <SubtitleStyled>|</SubtitleStyled>
        <SubtitleStyled>About Us</SubtitleStyled>
      </SubtitleContainerStyled>
    </AboutUsContentStyled>
  </AboutUsWrapperStyled>
)

export default AboutUsHeroImage
