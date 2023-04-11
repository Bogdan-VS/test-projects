import React from 'react'

import Subtitle from '@/components/Subtitle'
import { iconsData } from '@/constants/iconData'

import {
  LogoContainerStyled,
  LogoItem,
  OurCustomersContentStyled,
  OurCustomersWrapperStyled,
  TitleContainerStyled,
  TitleStyled,
} from './styled'

const OurCustomersSection = () => (
  <OurCustomersWrapperStyled>
    <OurCustomersContentStyled>
      <TitleContainerStyled>
        <TitleStyled>Our customers</TitleStyled>
        <Subtitle
          fontSize='20'
          lineHeight='33'
          width='445'
          text='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan, totam rem aperiam.'
        />
      </TitleContainerStyled>
      <LogoContainerStyled>
        {iconsData.LogoIconCustomers.map(({ id, url }) => (
          <LogoItem key={id} bg={url} />
        ))}
      </LogoContainerStyled>
    </OurCustomersContentStyled>
  </OurCustomersWrapperStyled>
)

export default OurCustomersSection
