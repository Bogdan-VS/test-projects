export const INPUT_VALUE = 'input_value'
export const ADD_RESULT = 'add_result'
export const CLEAR_RESULT = 'clear_reult'
export const FULL_CLEAR = 'full_clear'
export const CLEAR = 'clear'
export const EXPRESSION = 'expression'
export const HAS_ERROR = 'has_error'
export const CHANGE_THEME = 'change_theme'
export const CHECK_THEME = 'check_theme'

export const inputValueCreator = payload => ({
  type: INPUT_VALUE,
  payload,
})

export const addExpressionCreator = payload => ({
  type: EXPRESSION,
  payload,
})

export const fullClearCreator = () => ({
  type: FULL_CLEAR,
})

export const clearCreator = () => ({
  type: CLEAR,
})

export const addResultCreator = payload => ({
  type: ADD_RESULT,
  payload,
})

export const clearResultCreator = () => ({
  type: CLEAR_RESULT,
})

export const hasErrorCreator = () => ({
  type: HAS_ERROR,
})

export const changeThemeCreator = payload => ({
  type: CHANGE_THEME,
  payload,
})

export const checkThemeCreator = () => ({
  type: CHECK_THEME,
})
