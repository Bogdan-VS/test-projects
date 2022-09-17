export const typeActions = {
  ADD_CURRENT_RESULT: 'ADD_CURRENT_RESULT',
  ADD_CURRENT_HISTORY: 'ADD_CURRENT_HISTORY',
  INPUT_VALUE: 'INPUT_VALUE',
  CLEAR_INPUT_VALUE: 'CLEAR_INPUT_VALUE',
  CLEAR_HISTORY: 'CLEAR_HISTORY',
  CHANGE_EXP: 'CHANGE_EXP',
  SWITCH_SIGN: 'CHANGE_SIGN',
  RESET_SIGN: 'RESET_SIGN',
  TOGGLE_FULL_HISTORY: 'TOGGLE_FULL_HISTORY',
  TOGGLE_HISTORY: 'TOGGLE_HISTORY',
  CLEAR_ALL_HISTORY: 'CLEAR_ALL_HISTORY',
  HAS_ERROR: 'HAS_ERROR',
  SWITCH_COMPONENTS: 'SWITCH_COMPONENTS',
  CHANGE_THEME: 'CHANGE_THEME',
  ADD_CURRENT_THEME: 'ADD_CURRENT_THEME',
  ADD_TEMP_VALUE: 'ADD_TEMP_VALUE',
  CLEAR_TEMP_VALUE: 'CLEAR_TEMP_VALUE',
}

export const actionCreatorList = {
  addCurrentResultCreator: payload => ({
    type: typeActions.ADD_CURRENT_RESULT,
    payload,
  }),
  addTempValueCreator: payload => ({
    type: typeActions.ADD_TEMP_VALUE,
    payload,
  }),
  clearTempValueCreator: () => ({
    type: typeActions.CLEAR_TEMP_VALUE,
  }),
  addCurrentHistoryCreator: payload => ({
    type: typeActions.ADD_CURRENT_HISTORY,
    payload,
  }),
  clearInputValueCreator: () => ({
    type: typeActions.CLEAR_INPUT_VALUE,
  }),

  inputValueCreator: payload => ({
    type: typeActions.INPUT_VALUE,
    payload,
  }),
  switchSignCreator: () => ({
    type: typeActions.SWITCH_SIGN,
  }),
  switchComponentsCreator: () => ({
    type: typeActions.SWITCH_COMPONENTS,
  }),
  resetSignCreator: () => ({
    type: typeActions.RESET_SIGN,
  }),
  toggleHistory: () => ({
    type: typeActions.TOGGLE_HISTORY,
  }),
  changeExpCreator: payload => ({
    type: typeActions.CHANGE_EXP,
    payload,
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
