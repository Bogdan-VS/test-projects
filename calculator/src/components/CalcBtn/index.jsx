import React from 'react'

import PropTypes from 'prop-types'

import { StyledCalcBtn } from './components'

const CalcBtn = React.memo(({ name, onClick, disabled }) => (
  <StyledCalcBtn disabled={disabled} onClick={onClick}>
    {name}
  </StyledCalcBtn>
))

CalcBtn.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
}

export default CalcBtn
