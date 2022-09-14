import { calculate, tokenize } from './calcOperations'
import {
  changeSign,
  checkUncorrectMessage,
} from './searchOperations'

export class Calculator {
  constructor() {
    this.inputValue = '0'
  }

  executeCommand = command => {
    this.inputValue = command.exec(this.inputValue)
  }
}

export class AddInputValue {
  constructor(value) {
    this.value = value
  }

  exec = value =>
    value === '0' || checkUncorrectMessage(value)
      ? this.value
      : value + this.value
}

export class CalcExp {
  constructor(oper) {
    this.oper = oper
  }

  exec = value => {
    const exp = value.slice(0, value.length - 1)

    return calculate(tokenize(exp)) + value.at(-1)
  }
}

export class SwitchSign {
  constructor(isSign) {
    this.isSign = isSign
  }

  exec = value => changeSign(value, this.isSign)
}

export class Equal {
  exec = value => calculate(tokenize(value))
}

export class ClearResult {
  exec = value =>
    value.length === 1 ? '0' : value.slice(0, value.length - 1)
}

export class FullClearResult {
  exec = value => '0'
}
