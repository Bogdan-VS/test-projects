import { useDispatch, useSelector } from 'react-redux';

import { actionCreators } from '../../store/actions/todoAction';
import { filterTodos, searchTodos } from '../../utils/filter';

import './todos.css';

export const Todos = () => {
  const { todos, todo, activeTodos } = useSelector((state) => state.todo);

  const dispatch = useDispatch();

  const handleChecked = (id) => () => {
    const updateTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    );

    dispatch(actionCreators.updateTodoCreator(updateTodos));
  };

  const handleDelete = (id) => () => {
    const updateTodos = todos.filter((todo) => todo.id !== id);

    dispatch(actionCreators.updateTodoCreator(updateTodos));
  };

  return (
    <>
      {filterTodos(searchTodos(todos, todo), activeTodos).map(
        ({ todo, id, checked }) => (
          <div className="todosWrapper" key={id}>
            <input
              type="checkbox"
              value={checked}
              onChange={handleChecked(id)}
            />
            <p
              className="description"
              style={{
                textDecoration: `${checked ? 'line-through' : 'none'}`,
              }}
            >
              {todo}
            </p>
            <button className="deleteTodo" onClick={handleDelete(id)}>
              Delete
            </button>
          </div>
        )
      )}
    </>
  );
};
