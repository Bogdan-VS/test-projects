import React from 'react'

import PropTypes from 'prop-types'

import { StyledButton } from './styled'

const ToastBtn = ({ name, onClick, color }) => (
  <StyledButton onClick={onClick} color={color}>
    {name}
  </StyledButton>
)

export default ToastBtn

ToastBtn.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}
