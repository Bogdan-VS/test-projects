import React, { Component } from 'react'

import { connect } from 'react-redux'

import PropsType from 'prop-types'

import { StyledKeypad } from '../Keypad/components'

import { actionCreatorList } from '@/store/actions/actionCreators'

import { calculate, tokenize } from '@/utils/calcOperations'
import { calcMessage } from '@/constants/message'
import {
  commands,
  BUTTONS_MAP,
  OPERATIONS,
} from '@/constants/buttons'
import {
  changeSign,
  searchOperations,
} from '@/utils/searchOperations'

import CalcBtnClass from '@/components/CalcBtnClass'

const { errorValue, errorExpression } = calcMessage

class KeypadClass extends Component {
  handleSumValue = value => () => {
    const {
      clearCreator,
      fullClearCreator,
      switchSignCreator,
      changeHistoryCreator,
      changeExpCreator,
      countExpCreator,
      inputValueCreator,
      resetSignCreator,
      addResultCreator,
      currentExpression,
      isSign,
      initValue,
      result,
    } = this.props

    switch (value) {
      case commands.CLEAR:
        clearCreator()
        break
      case commands.FULL_CLEAR:
        fullClearCreator()
        break
      case commands.SIGN:
        switchSignCreator()
        changeHistoryCreator(
          changeSign(currentExpression, isSign),
        )
        changeExpCreator(changeSign(initValue, isSign))
        break
      case commands.EQUAL:
        countExpCreator(calculate(tokenize(initValue)))
        break
      default:
        if (
          result !== errorValue ||
          result !== errorExpression
        ) {
          inputValueCreator(value)

          if (OPERATIONS.includes(value)) resetSignCreator()

          if (searchOperations(value, initValue)) {
            addResultCreator(calculate(tokenize(initValue)))
          }
        }
    }
  }

  componentDidUpdate() {
    const {
      result,
      clearResultCreator,
      inputValueCreator,
    } = this.props

    if (result === errorValue || result === errorExpression) {
      setTimeout(() => {
        clearResultCreator()
      }, 2000)
    } else if (+result || result === '0') {
      inputValueCreator(result)
      clearResultCreator()
    }
  }

  render() {
    const btnCollection = BUTTONS_MAP.map(value => {
      return (
        <CalcBtnClass
          key={value}
          name={value}
          onClick={this.handleSumValue(value)}
        />
      )
    })

    return <StyledKeypad>{btnCollection}</StyledKeypad>
  }
}

KeypadClass.propsType = {
  initValue: PropsType.string,
  result: PropsType.string,
  isSign: PropsType.bool,
  currentExpression: PropsType.array,
}

const mapStateToProps = state => ({
  initValue: state.calculator.initValue,
  result: state.calculator.result,
  isSign: state.calculator.isSign,
  currentExpression: state.calculator.currentExpression,
})

const mapDispatchToProps = () => ({
  clearCreator: actionCreatorList.clearCreator,
  fullClearCreator: actionCreatorList.fullClearCreator,
  switchSignCreator: actionCreatorList.switchSignCreator,
  changeHistoryCreator: actionCreatorList.changeHistoryCreator,
  changeExpCreator: actionCreatorList.changeExpCreator,
  countExpCreator: actionCreatorList.countExpCreator,
  inputValueCreator: actionCreatorList.inputValueCreator,
  resetSignCreator: actionCreatorList.resetSignCreator,
  addResultCreator: actionCreatorList.addResultCreator,
  clearResultCreator: actionCreatorList.clearResultCreator,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps(),
)(KeypadClass)
