import Subtitle from '@/components/Subtitle'
import { TitleH2Styled } from '@/theme/styled'
import React from 'react'
import {
  BrStyled,
  ContentStyled,
  HeroImagesWrapperStyled,
  PositionContainerStyled,
  PositionWrapperStyled,
  SubtitleContainerStyled,
  SubtitlePositionStyled,
  TitleContainerStyled,
} from './styled'

const OurTeamHeroImages = () => (
  <HeroImagesWrapperStyled>
    <ContentStyled>
      <PositionWrapperStyled>
        <PositionContainerStyled>
          <SubtitlePositionStyled>Home</SubtitlePositionStyled>
          <SubtitlePositionStyled>|</SubtitlePositionStyled>
          <SubtitlePositionStyled>Our team</SubtitlePositionStyled>
        </PositionContainerStyled>
      </PositionWrapperStyled>
      <TitleContainerStyled>
        <TitleH2Styled>Our Team</TitleH2Styled>
        <SubtitleContainerStyled>
          <Subtitle
            fontSize='14'
            lineHeight='24'
            width='540'
            text='Sed ut perspiciatis unde omnis iste natus error volupta accusantium doloremque laudantium, totam remiga aperiam, eaque ipsa. Phasellus tristique eu nisl eu consectetur.'
          />
          <BrStyled />
          <Subtitle
            fontSize='14'
            lineHeight='24'
            width='540'
            text='Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id, lacinia auctor orci. Sed quis lobortis eros. Fusce id commodo libero.'
          />
        </SubtitleContainerStyled>
      </TitleContainerStyled>
    </ContentStyled>
  </HeroImagesWrapperStyled>
)

export default OurTeamHeroImages
