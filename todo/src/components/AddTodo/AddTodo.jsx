import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import uniqid from 'uniqid';

import { actionCreators } from '../../store/actions/todoAction';

import './addTodo.css';

export const AddTodo = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm();

  const handleTodo = ({ todo }) => {
    const data = { todo, id: uniqid(), checked: false };

    dispatch(actionCreators.addTodoCreator(data));

    reset();
  };

  return (
    <form className="todoWrapper" onSubmit={handleSubmit(handleTodo)}>
      <input
        type="text"
        placeholder="What should be done?"
        {...register('todo')}
      />
      <input type="submit" value="Add Todo" />
    </form>
  );
};
