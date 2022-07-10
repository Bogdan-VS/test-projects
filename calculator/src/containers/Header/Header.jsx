import React from 'react'

import { Link } from 'react-router-dom'

import { Pages } from '@/constants'

import HeaderButton from '@/components/HeaderButton'

import {
  StyledButtonContainer,
  StyledHeader,
  StyledTitle,
  StyledWrapper,
} from './components'

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
