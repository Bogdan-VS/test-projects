import { todoList } from '../constants/todos';

export const filterTodos = (todos, filter) => {
  console.log(todos, filter);
  switch (filter) {
    case todoList.active:
      return todos.filter((todo) => todo.checked === false);
    case todoList.done:
      return todos.filter((todo) => todo.checked === true);
    default:
      return todos;
  }
};

export const searchTodos = (todos, todo) =>
  todos.filter(
    (data) => data.todo.toLowerCase().indexOf(todo.toLowerCase()) > -1
  );
