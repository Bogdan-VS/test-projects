import React from 'react'

import Subtitle from '@/components/Subtitle'

import {
  DescriptionContainerStyled,
  ImageStyled,
  ImgConteiner,
  TitleStyled,
  WhoWeAreContentStyled,
  WhoWeAreWrapperStyled,
} from './styled'

const WhoWeAreSection = () => (
  <WhoWeAreWrapperStyled>
    <WhoWeAreContentStyled>
      <DescriptionContainerStyled>
        <TitleStyled>Who we are</TitleStyled>
        <Subtitle
          fontSize='20'
          width='445'
          lineHeight='33'
          text='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque finibus consequat felis vel pretium. Aliquam gravida nisi vel convallis ultricies. Integer ante sapien, consequat et dolor vel, cursus lacinia lectus.'
        />
      </DescriptionContainerStyled>
      <ImgConteiner>
        <ImageStyled src='./assets/images/img_1.png' />
      </ImgConteiner>
    </WhoWeAreContentStyled>
  </WhoWeAreWrapperStyled>
)

export default WhoWeAreSection
