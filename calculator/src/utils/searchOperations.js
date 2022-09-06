export const searchOperations = (oper, exp) => {
  const isOper = ['+', '-', '/', '*'].includes(
    oper,
  )

  return isOper && exp.split('').includes(oper)
}
