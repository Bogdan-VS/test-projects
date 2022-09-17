import React, { Component } from 'react'

import { connect } from 'react-redux'

import PropType from 'prop-types'

import { CLEAR_HISTORY } from '@/constants/buttons'
import { actionCreatorList } from '@/store/actions/actionCreators'

import { StyledControlBtn } from '../ControlPanelBtn/components'

class ControlPanelBtnClass extends Component {
  handleBtn = () => {
    this.props.name === CLEAR_HISTORY
      ? this.props.clearHistoryCreator()
      : this.props.toggleHistoryCreator()
  }

  render() {
    return (
      <StyledControlBtn onClick={this.handleBtn}>
        {this.props.name}
      </StyledControlBtn>
    )
  }
}

ControlPanelBtnClass.propType = {
  name: PropType.string,
}

const mapStateToProps = state => state

const mapDispatchToProps = () => ({
  clearHistoryCreator: actionCreatorList.clearHistoryCreator,
  toggleHistoryCreator: actionCreatorList.toggleHistoryCreator,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps(),
)(ControlPanelBtnClass)
