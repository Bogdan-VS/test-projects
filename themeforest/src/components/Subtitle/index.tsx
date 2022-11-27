import React from 'react'

import { IProps } from './interfaces'
import { SubtitleStyled } from './styled'

const Subtitle = ({ fontSize, text, width }: IProps) => (
  <SubtitleStyled width={width} fontSize={fontSize}>
    {text}
  </SubtitleStyled>
)

export default Subtitle
