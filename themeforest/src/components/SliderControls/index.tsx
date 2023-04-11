import React from 'react'

import SocialLink from '../SocialLink'
import { IProps } from './interfaces'

import { ButtonStyled, ControlsWrapperStyled } from './styled'

const SliderControls = ({
  handleInc,
  handleDec,
  incDisabled,
  decDisabled,
  dRight,
  dLeft,
  color,
  colorHover,
  colorDisabled,
}: IProps) => (
  <ControlsWrapperStyled>
    <ButtonStyled onClick={handleDec} disabled={decDisabled}>
      <SocialLink
        d={dLeft}
        color={color}
        colorHover={colorHover}
        disabled={decDisabled}
        colorDisabled={colorDisabled}
      />
    </ButtonStyled>
    <ButtonStyled onClick={handleInc} disabled={incDisabled}>
      <SocialLink
        d={dRight}
        color={color}
        colorHover={colorHover}
        disabled={incDisabled}
        colorDisabled={colorDisabled}
      />
    </ButtonStyled>
  </ControlsWrapperStyled>
)

export default SliderControls
