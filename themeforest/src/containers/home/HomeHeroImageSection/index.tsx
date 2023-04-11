import React from 'react'

import { useNavigate } from 'react-router-dom'
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
} from './styled'
import { Pages } from '@/constants/path'
import { TitleH2Styled } from '@/theme/styled'

const HomeHeroImageSection = () => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(Pages.SERVICE)
  }

  return (
    <HeroImageWrapperStyled>
      <ContentWrapperStyled>
        <ContentStyled>
          <TitleH2Styled>
            Find true power in your data with {<SelectStyled>Ensome</SelectStyled>}
          </TitleH2Styled>
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
          <ButtonTitleStyled onClick={handleNavigate}>Learn more</ButtonTitleStyled>
        </ButtonStyled>
      </ButtonWrapperStyled>
    </HeroImageWrapperStyled>
  )
}

export default HomeHeroImageSection
