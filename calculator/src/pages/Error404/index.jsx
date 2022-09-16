import React from 'react'

import { error404Message } from '@/constants/message'

import {
  StyledError404,
  StyledSubtitle,
  StyledTitle,
  StyledWrapper,
} from './components'

const Error404 = () => {
  return (
    <StyledError404>
      <StyledWrapper>
        <StyledTitle>404</StyledTitle>
        <StyledSubtitle>{error404Message}</StyledSubtitle>
      </StyledWrapper>
    </StyledError404>
  )
}

export default Error404
