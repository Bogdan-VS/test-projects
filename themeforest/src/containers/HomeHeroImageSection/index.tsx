import React from 'react'

import Subtitle from '@/components/Subtitle'

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
  TitleStyled,
} from './styled'

const HomeHeroImageSection = () => (
  <HeroImageWrapperStyled>
    <ContentWrapperStyled>
      <ContentStyled>
        <TitleStyled>
          Find true power in your data with {<SelectStyled>Ensome</SelectStyled>}
        </TitleStyled>
        <Subtitle
          text='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          lauda, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.'
          width='350'
          lineHeight='28'
          fontSize='14'
        />
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
