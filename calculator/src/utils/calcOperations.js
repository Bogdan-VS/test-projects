import { calcMessage } from '@/constants/message'

const isComma = ch => {
  return /./.test(ch)
}

const isDigit = ch => {
  return /\d/.test(ch)
}

const isOperator = ch => {
  return /\+|-|\*|\//.test(ch)
}

const isLeftParenthesis = ch => {
  return /\(/.test(ch)
}

const isRightParenthesis = ch => {
  return /\)/.test(ch)
}

const dColl = []
const opColl = []
const expColl = []

const preOper = {
  '-': 12,
  '+': 12,
  '*': 13,
  '/': 13,
  '%': 13,
}

const brackets = {
  open: '(',
  close: ')',
}

export const tokenize = str => {
  str.replace(/\s+/g, '')
  str = str.split('')

  const result = []
  let letterBuffer = []
  let numberBuffer = []

  const emptyLetterBufferAsVariables = () => {
    const l = letterBuffer.length

    for (let i = 0; i < l; i++) {
      result.push(letterBuffer[i])
      if (i < l - 1) {
        result.push('*')
      }
    }

    letterBuffer = []
  }

  const emptyNumberBufferAsLiteral = () => {
    if (numberBuffer.length) {
      result.push(numberBuffer.join(''))
      numberBuffer = []
    }
  }

  str.forEach(char => {
    if (isDigit(char)) {
      numberBuffer.push(char)
    } else if (char === '.') {
      numberBuffer.push(char)
    } else if (isOperator(char)) {
      if (numberBuffer.length === 0 && char === '-') {
        numberBuffer.push(char)
      } else {
        emptyNumberBufferAsLiteral()
        emptyLetterBufferAsVariables()

        result.push(char)
      }
    } else if (isLeftParenthesis(char)) {
      if (letterBuffer.length) {
        result.push(letterBuffer.join(''))

        letterBuffer = []
      } else if (numberBuffer.length) {
        emptyNumberBufferAsLiteral()

        result.push('*')
      }

      result.push(char)
    } else if (isRightParenthesis(char)) {
      emptyLetterBufferAsVariables()
      emptyNumberBufferAsLiteral()

      result.push(char)
    } else if (isComma(char)) {
      emptyNumberBufferAsLiteral()
      emptyLetterBufferAsVariables()

      result.push(char)
    }
  })

  if (numberBuffer.length) {
    emptyNumberBufferAsLiteral()
  }

  if (letterBuffer.length) {
    emptyLetterBufferAsVariables()
  }

  return result
}

export const calculate = tokenCollection => {
  let resultWithError = ''

  const calcResult = args => {
    const [firstValue, operate, secondValue] = args

    switch (operate) {
      case '+':
        return String(
          +(firstValue + secondValue).toFixed(3),
        )
      case '-':
        return String(
          +(firstValue - secondValue).toFixed(3),
        )
      case '/':
        return String(
          +(firstValue / secondValue).toFixed(3),
        )
      case '*':
        return String(
          +(firstValue * secondValue).toFixed(3),
        )
      case '%':
        return String(
          +(firstValue % secondValue).toFixed(3),
        )
    }
  }

  const calcStack = (
    expression,
    firstVal,
    secondVal,
    oper,
    digitColl,
    operColl,
  ) => {
    expression.push([firstVal, oper, secondVal])

    const result = calcResult(
      expression[expression.length - 1],
    )

    digitColl.pop()
    digitColl.pop()
    operColl.pop()

    digitColl.push(result)
  }

  tokenCollection.forEach(elem => {
    if (+elem) {
      dColl.push(elem)
    } else if (preOper[elem]) {
      if (
        opColl.length === 0 ||
        opColl[opColl.length - 1] === brackets.open ||
        opColl[opColl.length - 1] === brackets.close
      ) {
        opColl.push(elem)
      } else if (
        preOper[elem] > preOper[opColl[opColl.length - 1]]
      ) {
        opColl.push(elem)
      } else if (
        preOper[elem] < preOper[opColl[opColl.length - 1]]
      ) {
        calcStack(
          expColl,
          +dColl[dColl.length - 2],
          +dColl[dColl.length - 1],
          opColl[opColl.length - 1],
          dColl,
          opColl,
        )

        if (
          preOper[opColl[opColl.length - 1]] ===
          preOper[elem]
        ) {
          calcStack(
            expColl,
            +dColl[dColl.length - 2],
            +dColl[dColl.length - 1],
            opColl[opColl.length - 1],
            dColl,
            opColl,
          )
        }

        opColl.push(elem)
      } else if (
        preOper[elem] === preOper[opColl[opColl.length - 1]]
      ) {
        calcStack(
          expColl,
          +dColl[dColl.length - 2],
          +dColl[dColl.length - 1],
          opColl[opColl.length - 1],
          dColl,
          opColl,
        )

        opColl.push(elem)
      }
    } else if (
      brackets.open === elem ||
      brackets.close === elem
    ) {
      if (brackets.open === elem) {
        opColl.push(elem)
      } else if (brackets.close === elem) {
        while (opColl[opColl.length - 1] !== '(') {
          calcStack(
            expColl,
            +dColl[dColl.length - 2],
            +dColl[dColl.length - 1],
            opColl[opColl.length - 1],
            dColl,
            opColl,
          )
        }

        opColl.pop()
      }
    } else {
      resultWithError += calcMessage.errorValue
    }
  })

  while (opColl.length > 0) {
    expColl.push([
      +dColl[dColl.length - 2],
      opColl[opColl.length - 1],
      +dColl[dColl.length - 1],
    ])

    const result = calcResult(expColl[expColl.length - 1])

    dColl.pop()
    dColl.pop()
    opColl.pop()

    if (opColl.length === 0) {
      return +result ? result : calcMessage.errorExpression
    }
    dColl.push(result)
  }

  return resultWithError || calcMessage.errorValue
}
