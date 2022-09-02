export const typeActions = {
  INPUT_VALUE: 'INPUT_VALUE',
  ADD_RESULT: 'ADD_RESULT',
  CLEAR_RESULT: 'CLEAR_RESULT',
  FULL_CLEAR: 'FULL_CLEAR',
  CLEAR: 'CLEAR',
  EXPRESSION: 'EXPRESSION',
  HAS_ERROR: 'HAS_ERROR',
  CHANGE_THEME: 'CHANGE_THEME',
  ADD_CURRENT_THEME: 'ADD_CURRENT_THEME',
  CLEAR_HISTORY: 'CLEAR_HISTORY',
  TOGGLE_FULL_HISTORY: 'TOGGLE_FULL_HISTORY',
  CLEAR_ALL_HISTORY: 'CLEAR_ALL_HISTORY',
}

export const actionCreatorList = {
  inputValueCreator: payload => ({
    type: typeActions.INPUT_VALUE,
    payload,
  }),
  addExpressionCreator: payload => ({
    type: typeActions.EXPRESSION,
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

// export const inputValueCreator: payload => ({
//   type: typeActions.INPUT_VALUE,
//   payload,
// })

// export const addExpressionCreator: payload => ({
//   type: typeActions.EXPRESSION,
//   payload,
// })

// export const fullClearCreator: () => ({
//   type: typeActions.FULL_CLEAR,
// })

// export const clearCreator: () => ({
//   type: typeActions.CLEAR,
// })

// export const addResultCreator: payload => ({
//   type: typeActions.ADD_RESULT,
//   payload,
// })

// export const clearResultCreator: () => ({
//   type: typeActions.CLEAR_RESULT,
// })

// export const hasErrorCreator: () => ({
//   type: typeActions.HAS_ERROR,
// })

// export const changeThemeCreator: payload => ({
//   type: typeActions.CHANGE_THEME,
//   payload,
// })

// export const addCurrentThemeCreator: payload => ({
//   type: typeActions.ADD_CURRENT_THEME,
//   payload,
// })

// export const clearHistoryCreator: () => ({
//   type: typeActions.CLEAR_HISTORY,
// })

// export const toggleHistoryCreator: () => ({
//   type: typeActions.TOGGLE_FULL_HISTORY,
// })

// export const clearAllHistoryCreator: () => ({
//   type: typeActions.CLEAR_ALL_HISTORY,
// })
