import React from 'react'

import { StyledButton } from './components'

const ToastBtn = ({ name, onClick, color }) => (
  <StyledButton onClick={onClick} color={color}>
    {name}
  </StyledButton>
)

export default ToastBtn
