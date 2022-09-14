import React, { lazy, Component } from 'react'

import { connect } from 'react-redux'

import PropsType from 'prop-types'

import { StyledKeypad } from './components'

import { actionCreatorList } from '@/store/actions/actionCreators'

import { commands, BUTTONS_MAP } from '@/constants/buttons'
import {
  changeSign,
  checkUncorrectMessage,
  searchOperations,
} from '@/utils/searchOperations'

import {
  Calculator,
  AddInputValue,
  CalcExp,
  SwitchSign,
  Equal,
  ClearResult,
  FullClearResult,
} from '@/utils/calculate'

const CalcBtn = lazy(() => import('@/components/calcBtn'))

const calc = new Calculator()

class KeypadClass extends Component {
  updateData = () => {
    this.props.addCurrentResultCreator(calc.inputValue)
  }

  handleSumValue = value => () => {
    const {
      inputValueCreator,
      resetSignCreator,
      clearInputValueCreator,
      switchSignCreator,
      changeExpCreator,
      addCurrentHistoryCreator,
      inputValue,
      isSign,
    } = this.props

    switch (value) {
      case commands.CLEAR:
        calc.executeCommand(new ClearResult())
        this.updateData()
        break
      case commands.FULL_CLEAR:
        calc.executeCommand(new FullClearResult())
        clearInputValueCreator()
        this.updateData()
        break
      case commands.SIGN:
        calc.executeCommand(new SwitchSign(isSign))
        this.updateData()
        changeExpCreator(changeSign(inputValue))
        switchSignCreator()
        break
      case commands.EQUAL:
        calc.executeCommand(new Equal())
        this.updateData()
        addCurrentHistoryCreator(inputValue)
        break
      default:
        calc.executeCommand(new AddInputValue(value))

        if (searchOperations(value, calc.inputValue)) {
          calc.executeCommand(new CalcExp())
        }

        this.updateData()
        inputValueCreator(value)
        resetSignCreator()
    }
  }

  componentDidUpdate() {
    const {
      currentResult,
      currentHistory,
      addCurrentResultCreator,
    } = this.props

    if (checkUncorrectMessage(currentResult)) {
      calc.executeCommand(
        new AddInputValue(currentHistory.at(-1)),
      )

      setTimeout(() => {
        addCurrentResultCreator(calc.inputValue)
      }, 2000)
    }
  }

  render() {
    const btnCollection = BUTTONS_MAP.map(value => {
      return (
        <CalcBtn
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
  inputValue: PropsType.string,
  currentResult: PropsType.string,
  isSign: PropsType.bool,
  currentHistory: PropsType.array,
}

const mapStateToProps = state => ({
  inputValue: state.calculator.inputValue,
  currentResult: state.calculator.currentResult,
  isSign: state.calculator.isSign,
  currentHistory: state.calculator.currentHistory,
})

const mapDispatchToProps = () => ({
  addCurrentResultCreator:
    actionCreatorList.addCurrentResultCreator,
  clearInputValueCreator:
    actionCreatorList.clearInputValueCreator,
  addCurrentHistoryCreator:
    actionCreatorList.addCurrentHistoryCreator,
  switchSignCreator: actionCreatorList.switchSignCreator,
  changeExpCreator: actionCreatorList.changeExpCreator,
  inputValueCreator: actionCreatorList.inputValueCreator,
  resetSignCreator: actionCreatorList.resetSignCreator,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps(),
)(KeypadClass)
