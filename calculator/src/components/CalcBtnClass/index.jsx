import React, { PureComponent } from 'react'

import PropTypes from 'prop-types'

import { StyledCalcBtn } from '../CalcBtn/components'

class CalcBtnClass extends PureComponent {
  render() {
    const { name, onClick, disabled } = this.props

    return (
      <StyledCalcBtn disabled={disabled} onClick={onClick}>
        {name}
      </StyledCalcBtn>
    )
  }
}

CalcBtnClass.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
}

export default CalcBtnClass
