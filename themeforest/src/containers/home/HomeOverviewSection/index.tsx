import React from 'react'

import Subtitle from '@/components/Subtitle'
import { iconsData } from '@/constants/iconData'

import { TitleH3Styled } from '@/theme/styled'
import {
  LeftSubtitleStyled,
  LeftTitleStyled,
  LogoContainerStyled,
  LogoItem,
  OverviewContainerStyled,
  OverviewWrapperStyled,
  SubtitleContainerLeftStyled,
  SubtitleContainerStyled,
  SubtitleItemContainerStyled,
} from './styled'

const HomeOverviewSection = () => (
  <OverviewWrapperStyled>
    <OverviewContainerStyled>
      <TitleH3Styled>We provide services that guarantee your success</TitleH3Styled>
      <SubtitleContainerStyled>
        <SubtitleContainerLeftStyled>
          <SubtitleItemContainerStyled>
            <LeftTitleStyled>1830+</LeftTitleStyled>
            <LeftSubtitleStyled>Project executed</LeftSubtitleStyled>
          </SubtitleItemContainerStyled>
          <SubtitleItemContainerStyled>
            <LeftTitleStyled>834+</LeftTitleStyled>
            <LeftSubtitleStyled>Satisfied customers</LeftSubtitleStyled>
          </SubtitleItemContainerStyled>
          <SubtitleItemContainerStyled>
            <LeftTitleStyled>390</LeftTitleStyled>
            <LeftSubtitleStyled>Data management</LeftSubtitleStyled>
          </SubtitleItemContainerStyled>
        </SubtitleContainerLeftStyled>
        <Subtitle
          fontSize='20'
          width='540'
          lineHeight='33'
          text='Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore. Donec tincidunt tempor quam, non mollis quam finibus nec.'
        />
      </SubtitleContainerStyled>
      <LogoContainerStyled>
        {iconsData.LogoIcon.map((el) => (
          <LogoItem key={el} bg={el} />
        ))}
      </LogoContainerStyled>
    </OverviewContainerStyled>
  </OverviewWrapperStyled>
)

export default HomeOverviewSection
