import React from 'react'

import { IProps } from './interfaces'

import { SubtitleStyled } from './styled'

const Subtitle = ({ fontSize, text, width, lineHeight }: IProps) => (
  <SubtitleStyled width={width} fontSize={fontSize} lineHeight={lineHeight}>
    {text}
  </SubtitleStyled>
)

export default Subtitle
