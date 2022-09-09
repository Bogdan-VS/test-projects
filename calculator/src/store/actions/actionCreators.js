export const typeActions = {
  INPUT_VALUE: 'INPUT_VALUE',
  COUNT_EXP: 'COUNT_EXP',
  ADD_RESULT: 'ADD_RESULT',
  SWITCH_SIGN: 'CHANGE_SIGN',
  RESET_SIGN: 'RESET_SIGN',
  CHANGE_EXP: 'CHANGE_EXP',
  CLEAR_RESULT: 'CLEAR_RESULT',
  FULL_CLEAR: 'FULL_CLEAR',
  CLEAR: 'CLEAR',
  EXPRESSION: 'EXPRESSION',
  HAS_ERROR: 'HAS_ERROR',
  CHANGE_THEME: 'CHANGE_THEME',
  ADD_CURRENT_THEME: 'ADD_CURRENT_THEME',
  CHANGE_HISTORY: 'CHANGE_HISTORY',
  CLEAR_HISTORY: 'CLEAR_HISTORY',
  TOGGLE_FULL_HISTORY: 'TOGGLE_FULL_HISTORY',
  TOGGLE_HISTORY: 'TOGGLE_HISTORY',
  CLEAR_ALL_HISTORY: 'CLEAR_ALL_HISTORY',
}

export const actionCreatorList = {
  inputValueCreator: payload => ({
    type: typeActions.INPUT_VALUE,
    payload,
  }),
  countExpCreator: payload => ({
    type: typeActions.COUNT_EXP,
    payload,
  }),
  changeHistoryCreator: payload => ({
    type: typeActions.CHANGE_HISTORY,
    payload,
  }),
  switchSignCreator: () => ({
    type: typeActions.SWITCH_SIGN,
  }),
  resetSignCreator: () => ({
    type: typeActions.RESET_SIGN,
  }),
  toggleHistory: () => ({
    type: typeActions.TOGGLE_HISTORY,
  }),
  addExpressionCreator: payload => ({
    type: typeActions.EXPRESSION,
    payload,
  }),
  changeExpCreator: payload => ({
    type: typeActions.CHANGE_EXP,
    payload,
  }),
  fullClearCreator: () => ({
    type: typeActions.FULL_CLEAR,
  }),
  clearCreator: () => ({
    type: typeActions.CLEAR,
  }),
  addResultCreator: payload => ({
    type: typeActions.ADD_RESULT,
    payload,
  }),
  clearResultCreator: () => ({
    type: typeActions.CLEAR_RESULT,
  }),
  hasErrorCreator: () => ({
    type: typeActions.HAS_ERROR,
  }),
  changeThemeCreator: payload => ({
    type: typeActions.CHANGE_THEME,
    payload,
  }),
  addCurrentThemeCreator: payload => ({
    type: typeActions.ADD_CURRENT_THEME,
    payload,
  }),
  clearHistoryCreator: () => ({
    type: typeActions.CLEAR_HISTORY,
  }),
  toggleHistoryCreator: () => ({
    type: typeActions.TOGGLE_FULL_HISTORY,
  }),
  clearAllHistoryCreator: () => ({
    type: typeActions.CLEAR_ALL_HISTORY,
  }),
}
