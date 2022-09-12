import React, { Component } from 'react'

import { error404Message } from '@/constants/message'

import {
  StyledError404,
  StyledSubtitle,
  StyledTitle,
  StyledWrapper,
} from './components'

export class Error404Class extends Component {
  render() {
    return (
      <StyledError404>
        <StyledWrapper>
          <StyledTitle>404</StyledTitle>
          <StyledSubtitle>
            {error404Message}
          </StyledSubtitle>
        </StyledWrapper>
      </StyledError404>
    )
  }
}
