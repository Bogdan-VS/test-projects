import Button from '@/components/Button'
import Subtitle from '@/components/Subtitle'
import React from 'react'
import {
  BottomRightWrapperStyled,
  FeaturesBottomWrapperStyled,
  FeaturesTopWrapperStyled,
  FeaturesWrapperStyled,
  ImageStyled,
  ImageWrapperStyled,
  SeparatorStyled,
  TitleStyled,
  TopLeftSelectStyled,
  TopLeftTitleStyled,
  TopRightContainerStyled,
} from './styled'

const HomeFeaturesSection = () => (
  <FeaturesWrapperStyled>
    <FeaturesTopWrapperStyled>
      <TopLeftTitleStyled>
        The <TopLeftSelectStyled>newest</TopLeftSelectStyled> business analytics platform
      </TopLeftTitleStyled>
      <TopRightContainerStyled>
        <Subtitle
          width='540'
          text='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
          fontSize='20'
          lineHeight='28'
        />
        <Button text='Discover more' />
      </TopRightContainerStyled>
    </FeaturesTopWrapperStyled>
    <FeaturesBottomWrapperStyled>
      <ImageWrapperStyled>
        <ImageStyled src='./assets/images/img_10.jpg' />
      </ImageWrapperStyled>
      <BottomRightWrapperStyled>
        <TitleStyled>
          Radically new solutions <SeparatorStyled />
          for data
        </TitleStyled>
        <Subtitle
          fontSize='20'
          width='540'
          lineHeight='28'
          text='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
        />
        <Button text='Learn more' />
      </BottomRightWrapperStyled>
    </FeaturesBottomWrapperStyled>
  </FeaturesWrapperStyled>
)

export default HomeFeaturesSection
