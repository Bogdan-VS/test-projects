import { calcMessage } from '@/constants/message'

export const searchOperations = (oper, exp) => {
  const reg = /[(,)]/gm
  const stack = []
  const isOper = ['+', '-', '/', '*'].includes(oper)

  exp
    .split('')
    .filter(el => el.match(reg))
    .forEach(el => {
      if (el === ')' && stack[stack.length - 1] === '(') {
        stack.pop()
      } else stack.push(el)
    })

  return (
    isOper && stack.length === 0 && exp.split('').includes(oper)
  )
}

export const changeSign = (exp, isSign) => {
  const res = exp.split('')

  for (let i = exp.length - 1; i >= 0; i--) {
    if (['+', '-', '/', '*'].includes(exp[i])) {
      if (!isSign) {
        res.splice(i + 1, 0, '-')
      } else {
        res.splice(i, 1)
      }

      return res.join('')
    }
  }

  return !isSign ? `-${exp}` : exp
}

export const checkErrorMessage = value => {
  return value === calcMessage.errorExpression ||
    value === calcMessage.errorValue
    ? true
    : !value === calcMessage.errorValue
}
