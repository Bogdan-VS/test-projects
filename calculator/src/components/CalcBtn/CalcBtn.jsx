import React from 'react'
import { StyledCalcBtn } from './components'

export const CalcBtn = ({ name, onClick }) => {
  return (
    <StyledCalcBtn onClick={onClick}>{name}</StyledCalcBtn>
  )
}
