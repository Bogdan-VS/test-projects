import React from 'react'

import { IProps } from './interfaces'

import { ButtonStyled } from './styled'

const Button = ({ width = '185', height = '54', text }: Partial<IProps>) => (
  <ButtonStyled width={width} height={height}>
    {text}
  </ButtonStyled>
)

export default Button
