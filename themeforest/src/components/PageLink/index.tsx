import React from 'react'
import { Link } from 'react-router-dom'

import { IProps } from './interfaces'

import { IconStyled } from './styled'

const PageLink = ({ link, name, handleClick }: IProps) => (
  <IconStyled>
    <Link to={link} className='link' onClick={handleClick}>
      {name}
    </Link>
  </IconStyled>
)

export default PageLink
