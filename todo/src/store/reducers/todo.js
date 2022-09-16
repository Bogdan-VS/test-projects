import { actions } from '../actions/todoAction';

const initTodo = {
  todos: [],
  todo: '',
  activeTodos: 'all',
};

export const todo = (state = initTodo, action) => {
  switch (action.type) {
    case actions.ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case actions.UPDATE_TODO:
      return { ...state, todos: action.payload };
    case actions.SEARCH_TODO:
      return { ...state, todo: action.payload };
    case actions.ACTIVE_TODOS:
      return { ...state, activeTodos: action.payload };
    default:
      return state;
  }
};
