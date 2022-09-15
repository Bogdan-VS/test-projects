import { actions } from '../actions/todoAction';

const initTodo = {
  todos: [],
};

export const todo = (state = initTodo, action) => {
  switch (action.type) {
    case actions.ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    default:
      return state;
  }
};
