import React from 'react'

import { IProps } from './interfaces'

import { IconLinkStyled, IconStyled } from './styled'

const PageLink = ({ link, name }: IProps) => (
  <IconStyled>
    <IconLinkStyled href={link}>{name}</IconLinkStyled>
  </IconStyled>
)

export default PageLink
