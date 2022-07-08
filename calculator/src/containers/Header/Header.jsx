import React, { lazy } from 'react'

import {
  StyledButtonContainer,
  StyledHeader,
  StyledTitle,
  StyledWrapper,
} from './components'

const HeaderButton = lazy(() =>
  import('@/components/HeaderButton'),
)

export const Header = () => {
  return (
    <StyledHeader>
      <StyledWrapper>
        <StyledTitle>Calculator</StyledTitle>
        <StyledButtonContainer>
          <HeaderButton name="Home" />
          <HeaderButton name="Settings" />
        </StyledButtonContainer>
      </StyledWrapper>
    </StyledHeader>
  )
}
