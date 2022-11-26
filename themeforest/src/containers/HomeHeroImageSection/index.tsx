import React from 'react'

import {
  ButtonStyled,
  ButtonTitleStyled,
  ButtonWrapperStyled,
  ContentStyled,
  ContentWrapperStyled,
  HeroImageWrapperStyled,
  ImageStyled,
  ImageWrapperStyled,
  SelectStyled,
  SubtitleStyled,
  TitleStyled,
} from './styled'

const HomeHeroImageSection = () => (
  <HeroImageWrapperStyled>
    <ContentWrapperStyled>
      <ContentStyled>
        <TitleStyled>
          Find true power in your data with {<SelectStyled>Ensome</SelectStyled>}
        </TitleStyled>
        <SubtitleStyled>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          lauda, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.
        </SubtitleStyled>
      </ContentStyled>
    </ContentWrapperStyled>
    <ImageWrapperStyled>
      <ImageStyled alt='Hero image' src='./assets/images/img_11.jpg' />
    </ImageWrapperStyled>
    <ButtonWrapperStyled>
      <ButtonStyled>
        <ButtonTitleStyled>Learn more</ButtonTitleStyled>
      </ButtonStyled>
    </ButtonWrapperStyled>
  </HeroImageWrapperStyled>
)

export default HomeHeroImageSection
