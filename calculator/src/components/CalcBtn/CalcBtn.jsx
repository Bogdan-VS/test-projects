import React from 'react'

import PropTypes from 'prop-types'

import { StyledCalcBtn } from './components'

export const CalcBtn = ({ name, onClick }) => {
  return (
    <StyledCalcBtn onClick={onClick}>{name}</StyledCalcBtn>
  )
}

CalcBtn.PropTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
}
