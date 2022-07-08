import React from 'react'
import { StyledMain, StyledWrapper } from './components'

export const Main = ({ children }) => {
  return (
    <StyledMain>
      <StyledWrapper>{children}</StyledWrapper>
    </StyledMain>
  )
}
