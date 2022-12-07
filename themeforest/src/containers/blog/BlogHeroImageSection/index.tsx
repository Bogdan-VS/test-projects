import {
  AboutUsContentStyled,
  SubtitleContainerStyled,
  SubtitleStyled,
  TitleStyled,
} from '@/containers/aboutUs/AboutUsHeroImage/styled'
import React from 'react'
import { BlogWrapperStyled } from './styled'

const BlogHeroImageSection = () => (
  <BlogWrapperStyled>
    <AboutUsContentStyled>
      <TitleStyled>2022 software development trends explained with benefits</TitleStyled>
      <SubtitleContainerStyled>
        <SubtitleStyled>Home</SubtitleStyled>
        <SubtitleStyled>|</SubtitleStyled>
        <SubtitleStyled>2022 software development trends</SubtitleStyled>
      </SubtitleContainerStyled>
    </AboutUsContentStyled>
  </BlogWrapperStyled>
)

export default BlogHeroImageSection
