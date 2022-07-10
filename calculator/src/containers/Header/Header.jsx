import { Pages } from '@/constants'
import React, { lazy } from 'react'
import { Link } from 'react-router-dom'

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
          <Link to={Pages.CALCULATOR}>
            <HeaderButton name="Home" className="home" />
          </Link>
          <Link to={Pages.SETTINGS}>
            <HeaderButton
              name="Settings"
              className="settings"
            />
          </Link>
        </StyledButtonContainer>
      </StyledWrapper>
    </StyledHeader>
  )
}
