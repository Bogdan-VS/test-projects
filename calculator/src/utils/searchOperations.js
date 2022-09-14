import { calcMessage } from '@/constants/message'

export const searchOperations = (oper, exp) => {
  const reg = /[(,)]/gm
  const stack = []

  const count = exp
    .split('')
    .filter(
      el => ['+', '-', '/', '*'].includes(el) && el === oper,
    )

  exp
    .split('')
    .filter(el => el.match(reg))
    .forEach(el => {
      if (el === ')' && stack[stack.length - 1] === '(') {
        stack.pop()
      } else stack.push(el)
    })

  return (
    count.length > 1 &&
    stack.length === 0 &&
    exp.split('').includes(oper)
  )
}

export const changeSign = (exp, isSign) => {
  const res = exp.split('')

  for (let i = exp.length - 1; i >= 0; i--) {
    if (['+', '-', '/', '*'].includes(exp[i])) {
      if (isSign) {
        res.splice(i + 1, 0, '-')
      } else {
        res.splice(i, 1)
      }

      return res.join('')
    }
  }

  return isSign ? `-${exp}` : exp
}

export const checkUncorrectMessage = value => {
  return (
    value === calcMessage.errorValue ||
    (value === calcMessage.errorExpression && true)
  )
}
