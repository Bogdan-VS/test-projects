import React from 'react'

import Subtitle from '@/components/Subtitle'

import {
  WhoWeAreContentStyled,
  DescriptionContainerStyled,
  TitleStyled,
  ImgConteiner,
  ImageStyled,
} from '../WhoWeAreSection/styled'
import { OurMissionWrapperStyled } from './styled'

const OurMissionSection = () => (
  <OurMissionWrapperStyled>
    <WhoWeAreContentStyled>
      <ImgConteiner>
        <ImageStyled src='./assets/images/img_2.png' />
      </ImgConteiner>
      <DescriptionContainerStyled>
        <TitleStyled>Our mission</TitleStyled>
        <Subtitle
          fontSize='20'
          width='445'
          lineHeight='33'
          text='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
        />
        <Subtitle
          fontSize='20'
          width='445'
          lineHeight='33'
          text='Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque finibus consequat felis vel pretium.'
        />
      </DescriptionContainerStyled>
    </WhoWeAreContentStyled>
  </OurMissionWrapperStyled>
)

export default OurMissionSection
