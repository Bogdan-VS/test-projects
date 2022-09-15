export const actions = {
  ADD_TODO: 'ADD_TODO',
};

export const actionCreators = {
  addTodoCreator: (payload) => ({
    type: actions.ADD_TODO,
    payload,
  }),
};
