import { useDispatch, useSelector } from 'react-redux';

import { FilterBtn } from '../../components/FilterBtn';
import { Search } from '../../components/Search';
import { todoList } from '../../constants/todos';
import { actionCreators } from '../../store/actions/todoAction';

import './header.css';

export const Header = () => {
  const { activeTodos } = useSelector((state) => state.todo);

  const dispatch = useDispatch();

  const handleAllTodos = () => {
    dispatch(actionCreators.changeActiveTodoCreator(todoList.all));
  };

  const handleDoneTodos = () => {
    dispatch(actionCreators.changeActiveTodoCreator(todoList.done));
  };

  const handleActiveTodos = () => {
    dispatch(actionCreators.changeActiveTodoCreator(todoList.active));
  };

  return (
    <>
      <h1 className="title">ToDo List</h1>
      <div className="searchBox">
        <Search />
        <div className="filterBox">
          <FilterBtn
            className={`${
              activeTodos === todoList.all
                ? 'filterBtn activeFilter'
                : 'filterBtn'
            }`}
            name="All"
            onClick={handleAllTodos}
          />
          <FilterBtn
            className={`${
              activeTodos === todoList.active
                ? 'filterBtn activeFilter'
                : 'filterBtn'
            }`}
            name="Active"
            onClick={handleActiveTodos}
          />
          <FilterBtn
            className={`${
              activeTodos === todoList.done
                ? 'filterBtn activeFilter'
                : 'filterBtn'
            }`}
            name="Done"
            onClick={handleDoneTodos}
          />
        </div>
      </div>
    </>
  );
};
