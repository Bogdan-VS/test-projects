import { useForm } from 'react-hook-form';

import './addTodo.css';

export const AddTodo = () => {
  const { register, handleSubmit } = useForm();

  const handleTodo = ({ todo }) => {
    console.log(todo);
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
