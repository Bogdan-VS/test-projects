import React from 'react'

import {
  BottomContainerStyled,
  CompanyOverviewContentStyled,
  CompanyOverviewWrapperStyled,
  DescriptionContainerStyled,
  DescriptionSubtitleStyled,
  DescriptionTytleStyled,
  LineStyled,
  TitleStyled,
} from './styled'

const CompanyOveviewSection = () => (
  <CompanyOverviewWrapperStyled>
    <CompanyOverviewContentStyled>
      <TitleStyled>Ensome in numbers</TitleStyled>
      <BottomContainerStyled>
        <DescriptionContainerStyled>
          <DescriptionTytleStyled>1830+</DescriptionTytleStyled>
          <DescriptionSubtitleStyled>Project executed</DescriptionSubtitleStyled>
        </DescriptionContainerStyled>
        <LineStyled />
        <DescriptionContainerStyled>
          <DescriptionTytleStyled>220</DescriptionTytleStyled>
          <DescriptionSubtitleStyled>Data analytics</DescriptionSubtitleStyled>
        </DescriptionContainerStyled>
        <LineStyled />
        <DescriptionContainerStyled>
          <DescriptionTytleStyled>390</DescriptionTytleStyled>
          <DescriptionSubtitleStyled>Data management</DescriptionSubtitleStyled>
        </DescriptionContainerStyled>
        <LineStyled />
        <DescriptionContainerStyled>
          <DescriptionTytleStyled>834+</DescriptionTytleStyled>
          <DescriptionSubtitleStyled>Satisfied customers</DescriptionSubtitleStyled>
        </DescriptionContainerStyled>
      </BottomContainerStyled>
    </CompanyOverviewContentStyled>
  </CompanyOverviewWrapperStyled>
)

export default CompanyOveviewSection
