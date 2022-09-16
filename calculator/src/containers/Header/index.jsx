import React from 'react'

import { NavLink } from 'react-router-dom'

import { Pages } from '@/constants'

import HeaderButton from '@/components/HeaderButton'

import {
  StyledButtonContainer,
  StyledHeader,
  StyledTitle,
  StyledWrapper,
} from './components'

const Header = () => {
  return (
    <StyledHeader>
      <StyledWrapper>
        <StyledTitle>Calculator</StyledTitle>
        <StyledButtonContainer>
          <NavLink
            to={Pages.CALCULATOR}
            activeClassName="active"
            exact>
            <HeaderButton name="Home" />
          </NavLink>
          <NavLink
            to={Pages.SETTINGS}
            activeClassName="active"
            exact>
            <HeaderButton name="Settings" />
          </NavLink>
        </StyledButtonContainer>
      </StyledWrapper>
    </StyledHeader>
  )
}

export default Header
