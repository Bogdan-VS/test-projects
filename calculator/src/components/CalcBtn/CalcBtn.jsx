import React from 'react'

import PropTypes from 'prop-types'

import { StyledCalcBtn } from './components'

export const CalcBtn = React.memo(
  ({ name, onClick }) => {
    return (
      <StyledCalcBtn onClick={onClick}>
        {name}
      </StyledCalcBtn>
    )
  },
)

CalcBtn.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
}
