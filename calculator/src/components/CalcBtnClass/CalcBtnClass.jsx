import React, { PureComponent } from 'react'

import PropTypes from 'prop-types'

import { StyledCalcBtn } from './components'

export class CalcBtnClass extends PureComponent {
  render() {
    const { name, onClick } = this.props

    return (
      <StyledCalcBtn onClick={onClick}>
        {name}
      </StyledCalcBtn>
    )
  }
}

CalcBtnClass.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
}
