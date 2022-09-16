export const actions = {
  ADD_TODO: 'ADD_TODO',
  UPDATE_TODO: 'UPDATE_TODO',
};

export const actionCreators = {
  addTodoCreator: (payload) => ({
    type: actions.ADD_TODO,
    payload,
  }),
  updateTodoCreator: (payload) => ({
    type: actions.UPDATE_TODO,
    payload,
  }),
};
