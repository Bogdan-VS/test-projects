export const actions = {
  ADD_TODO: 'ADD_TODO',
  UPDATE_TODO: 'UPDATE_TODO',
  SEARCH_TODO: 'SEARCH_TODO',
  ACTIVE_TODOS: 'ACTIVE_TODOS',
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
  searchTodoCreator: (payload) => ({
    type: actions.SEARCH_TODO,
    payload,
  }),
  changeActiveTodoCreator: (payload) => ({
    type: actions.ACTIVE_TODOS,
    payload,
  }),
};
