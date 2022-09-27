import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'

import { Pages } from '@/constants'

import HeaderButtonClass from '@/components/HeaderButtonClass'

import { StyledButtonContainer, StyledHeader, StyledTitle, StyledWrapper } from '../Header/components'

class HeaderClass extends Component {
  render() {
    return (
      <StyledHeader>
        <StyledWrapper>
          <StyledTitle>Calculator</StyledTitle>
          <StyledButtonContainer>
            <NavLink
              to={Pages.CALCULATOR}
              activeClassName="active"
              exact>
              <HeaderButtonClass name="Home" />
            </NavLink>
            <NavLink
              to={Pages.SETTINGS}
              activeClassName="active"
              exact>
              <HeaderButtonClass name="Settings" />
            </NavLink>
          </StyledButtonContainer>
        </StyledWrapper>
      </StyledHeader>
    )
  }
}

export default HeaderClass
