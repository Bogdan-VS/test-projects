import React from 'react'

import { IProps } from './interfaces'

import { PathStyled, SvgStyled } from '@/theme/styled'
import { IconLinkStyled, IconStyled } from './styled'

const SocialLink = ({ d, color, colorHover, link }: IProps) => (
  <IconStyled>
    <IconLinkStyled href={link}>
      <SvgStyled
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <PathStyled d={d} color={color} colorHover={colorHover} />
      </SvgStyled>
    </IconLinkStyled>
  </IconStyled>
)

export default SocialLink
